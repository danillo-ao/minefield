import React from 'react';

import { random } from '@/utils/math.utils';

import { BombErrorIcon } from '@components/bomb-error-icon';
import { BombIcon } from '@components/bomb-icon';
import { FlagIcon } from '@components/flag-icon';
import { Field, FieldCell } from '@components/minefield/minefield.types';
import { fieldCell } from '@components/minefield/minefield.values';

import * as Styles from './minefield.styles';

const Minefield: React.FC = () => {
  const [rows, setRows] = React.useState<number>(15);
  const [cols, setCols] = React.useState<number>(15);
  const [bombs, setBombs] = React.useState<number>(30);

  const [field, setField] = React.useState<Field>([]);
  const [exploded, setExploded] = React.useState<boolean>(false);
  const [visualHelp, setVisualHelp] = React.useState<boolean>(false);

  const [totalAvailablePins, setTotalAvailablePins] =
    React.useState<number>(bombs);

  const startGame = () => {
    setExploded(false);

    setField([]);
    setTimeout(() => {
      createField();
    }, 50);
  };

  /**
   *
   *
   */
  const createField = () => {
    // add rows
    const fieldRows = Array(rows).fill([]);
    const rowCells = Array(cols).fill(fieldCell);

    const _field = fieldRows.map(() => [...rowCells]);

    defineBombs(_field);
  };

  /**
   *
   */
  const defineBombs = (_field: Field) => {
    if (_field.length) {
      const maxBombs = rows * cols;

      for (let count = 0; count < Math.min(bombs, maxBombs); count++) {
        const row = random(rows);
        const cell = random(cols);

        if (_field[row][cell].bomb) {
          count--;
        } else {
          _field[row][cell] = { ..._field[row][cell], bomb: true };
        }
      }
      countFields(_field);
    }
  };

  const countCell = (_field: Field, row: number, cell: number) => {
    const rowBefore = row - 1;
    const rowAfter = row + 1;

    const cellBefore = cell - 1;
    const cellAfter = cell + 1;

    let count = 0;

    if (_field[rowBefore]) {
      count += _field[rowBefore]?.[cellBefore]?.bomb ? 1 : 0;
      count += _field[rowBefore]?.[cell]?.bomb ? 1 : 0;
      count += _field[rowBefore]?.[cellAfter]?.bomb ? 1 : 0;
    }

    if (_field[rowAfter]) {
      count += _field[rowAfter]?.[cellBefore]?.bomb ? 1 : 0;
      count += _field[rowAfter]?.[cell]?.bomb ? 1 : 0;
      count += _field[rowAfter]?.[cellAfter]?.bomb ? 1 : 0;
    }

    count += _field[row]?.[cellBefore]?.bomb ? 1 : 0;
    count += _field[row]?.[cellAfter]?.bomb ? 1 : 0;

    return count;
  };

  const countFields = (_field: Field) => {
    const fieldCount = _field.map((row, rowNumber) =>
      row.map((cell, cellNumber) => {
        if (!cell.bomb) {
          const count = countCell(_field, rowNumber, cellNumber);
          return { ...cell, count };
        }
        return cell;
      }),
    );

    setField(fieldCount);
  };

  const revealBombs = () => {
    const revealedFields = field.map(row =>
      row.map(cell => ({
        ...cell,
        revealed: cell.pinned ? false : cell.bomb ? true : cell.revealed,
      })),
    );
    setField(revealedFields);
  };

  // game functions
  const checkGameLife = () => {
    const total = rows * cols;
    const mustReveal = total - bombs;
    let revealed = 0;
    let pinned = 0;
    let rightPinned = 0;

    field.map(row =>
      row.map(cell => {
        revealed += cell.revealed ? 1 : 0;
        pinned += cell.pinned ? 1 : 0;
        rightPinned += cell.pinned && cell.bomb ? 1 : 0;
      }),
    );

    if (
      mustReveal === revealed &&
      pinned === rightPinned &&
      rightPinned === bombs
    ) {
      console.log('YOU WIN');
    }

    console.log({ total, mustReveal, revealed, pinned, rightPinned });
  };

  // handle functions

  const handleField = (row: number, cell: number) => {
    const _field = [...field];
    const clickedField = _field[row][cell];

    if (clickedField.revealed || clickedField.pinned || exploded) return;
    if (clickedField.bomb) {
      _field[row][cell] = { ..._field[row][cell], exploded: true };
      setField(_field);
      setExploded(true);
      revealBombs();
      return;
    }

    _field[row][cell] = { ..._field[row][cell], revealed: true };
    setField(_field);
    revealAround(row, cell, _field);

    checkGameLife();
  };

  const revealAround = (row: number, col: number, _field: Field) => {
    const topBefore = { ..._field?.[row - 1]?.[col - 1] };
    const topMiddle = { ..._field?.[row - 1]?.[col] };
    const topAfter = { ..._field?.[row - 1]?.[col + 1] };

    const before = { ..._field?.[row]?.[col - 1] };
    const after = { ..._field?.[row]?.[col + 1] };

    const bottomBefore = { ..._field?.[row + 1]?.[col - 1] };
    const bottomMiddle = { ..._field?.[row + 1]?.[col] };
    const bottomAfter = { ..._field?.[row + 1]?.[col + 1] };

    if (Object.keys(topBefore).length) {
      if (!topBefore.bomb && !topBefore.revealed && !topBefore.pinned) {
        const _row = row - 1;
        const _col = col - 1;
        topBefore.revealed = true;

        _field[_row][_col] = topBefore;
        if (topBefore.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(topMiddle).length) {
      if (!topMiddle.bomb && !topMiddle.revealed && !topMiddle.pinned) {
        const _row = row - 1;
        const _col = col;
        topMiddle.revealed = true;

        _field[_row][_col] = topMiddle;
        if (topMiddle.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(topAfter).length) {
      if (!topAfter.bomb && !topAfter.revealed && !topAfter.pinned) {
        const _row = row - 1;
        const _col = col + 1;
        topAfter.revealed = true;

        _field[_row][_col] = topAfter;
        if (topAfter.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(before).length) {
      if (!before.bomb && !before.revealed && !before.pinned) {
        const _row = row;
        const _col = col - 1;
        before.revealed = true;

        _field[_row][_col] = before;
        if (after.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(after).length) {
      if (!after.bomb && !after.revealed && !after.pinned) {
        const _row = row;
        const _col = col + 1;
        after.revealed = true;

        _field[_row][_col] = after;
        if (after.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(bottomBefore).length) {
      if (
        !bottomBefore.bomb &&
        !bottomBefore.revealed &&
        !bottomBefore.pinned
      ) {
        const _row = row + 1;
        const _col = col - 1;
        bottomBefore.revealed = true;

        _field[_row][_col] = bottomBefore;
        if (bottomBefore.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(bottomMiddle).length) {
      if (
        !bottomMiddle.bomb &&
        !bottomMiddle.revealed &&
        !bottomMiddle.pinned
      ) {
        const _row = row + 1;
        const _col = col;
        bottomMiddle.revealed = true;

        _field[_row][_col] = bottomMiddle;
        if (bottomMiddle.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    if (Object.keys(bottomAfter).length) {
      if (!bottomAfter.bomb && !bottomAfter.revealed && !bottomAfter.pinned) {
        const _row = row + 1;
        const _col = col + 1;
        bottomAfter.revealed = true;

        _field[_row][_col] = bottomAfter;
        if (bottomAfter.count === 0) {
          revealAround(_row, _col, _field);
        }
      }
    }

    setField(_field);
  };

  const pinCell = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (exploded) return;

    const _field = [...field];
    const cell = _field[row][col];

    if (cell.revealed) return;
    cell.pinned = !cell.pinned;

    _field[row][col] = cell;
    setField(_field);

    checkGameLife();
  };

  const enterCell = (row: number, col: number) => {
    if (exploded) return;
    if (visualHelp) {
      const rowBefore = row - 1;
      const rowAfter = row + 1;
      const colBefore = col - 1;
      const colAfter = col + 1;

      const topBefore = field?.[rowBefore]?.[colBefore];
      const topMiddle = field?.[rowBefore]?.[col];
      const topAfter = field?.[rowBefore]?.[colAfter];

      const before = field?.[row]?.[colBefore];
      const after = field?.[row]?.[colAfter];

      const bottomBefore = field[rowAfter]?.[colBefore];
      const bottomMiddle = field[rowAfter]?.[col];
      const bottomAfter = field?.[rowAfter]?.[colAfter];

      if (topBefore && !topBefore.pinned && !topBefore.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (topMiddle && !topMiddle.pinned && !topMiddle.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${col}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (topAfter && !topAfter.pinned && !topAfter.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (before && !before.pinned && !before.revealed) {
        const element = document.querySelector(
          `[data-row="${row}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (after && !after.pinned && !after.revealed) {
        const element = document.querySelector(
          `[data-row="${row}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (bottomBefore && !bottomBefore.pinned && !bottomBefore.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (bottomMiddle && !bottomMiddle.pinned && !bottomMiddle.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${col}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }

      if (bottomAfter && !bottomAfter.pinned && !bottomAfter.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.add('highlight');
      }
    }
  };

  const leaveCell = (row: number, col: number) => {
    if (exploded) return;
    if (visualHelp) {
      const rowBefore = row - 1;
      const rowAfter = row + 1;
      const colBefore = col - 1;
      const colAfter = col + 1;

      const topBefore = field?.[rowBefore]?.[colBefore];
      const topMiddle = field?.[rowBefore]?.[col];
      const topAfter = field?.[rowBefore]?.[colAfter];

      const before = field?.[row]?.[colBefore];
      const after = field?.[row]?.[colAfter];

      const bottomBefore = field[rowAfter]?.[colBefore];
      const bottomMiddle = field[rowAfter]?.[col];
      const bottomAfter = field?.[rowAfter]?.[colAfter];

      if (topBefore && !topBefore.pinned && !topBefore.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (topMiddle && !topMiddle.pinned && !topMiddle.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${col}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (topAfter && !topAfter.pinned && !topAfter.revealed) {
        const element = document.querySelector(
          `[data-row="${rowBefore}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (before && !before.pinned && !before.revealed) {
        const element = document.querySelector(
          `[data-row="${row}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (after && !after.pinned && !after.revealed) {
        const element = document.querySelector(
          `[data-row="${row}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (bottomBefore && !bottomBefore.pinned && !bottomBefore.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${colBefore}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (bottomMiddle && !bottomMiddle.pinned && !bottomMiddle.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${col}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }

      if (bottomAfter && !bottomAfter.pinned && !bottomAfter.revealed) {
        const element = document.querySelector(
          `[data-row="${rowAfter}"][data-col="${colAfter}"]`,
        ) as HTMLElement;

        element.classList.remove('highlight');
      }
    }
  };

  //
  //
  //
  //

  const renderBombErrorIcon = (cell: FieldCell) => {
    if (exploded && cell.pinned && !cell.bomb) return <BombErrorIcon />;
    return null;
  };

  const renderFlag = (cell: FieldCell) => {
    if (!cell.revealed && cell.pinned && !exploded) return <FlagIcon />;
    if (exploded && cell.pinned && cell.bomb) return <FlagIcon />;
    return null;
  };

  const renderRevealedCell = (cell: FieldCell) => {
    if (cell.revealed) {
      return (
        <>
          {cell.bomb && <BombIcon />}
          {cell.count > 0 && !cell.bomb && (
            <Styles.FieldCount count={cell.count as any}>
              {cell.count}
            </Styles.FieldCount>
          )}
        </>
      );
    }
    return null;
  };

  React.useEffect(() => {
    createField();
  }, []);

  return (
    <Styles.MineFieldContent>
      <Styles.MineFieldOptions>
        <input
          type="number"
          value={rows}
          onChange={e => setRows(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          value={cols}
          onChange={e => setCols(parseInt(e.target.value, 10))}
        />
        <input
          type="number"
          value={bombs}
          onChange={e => setBombs(parseInt(e.target.value, 10))}
        />
        <button onClick={startGame}>create field</button>
        <button
          onClick={() => {
            setVisualHelp(!visualHelp);
          }}
        >
          toggle visual help
        </button>
      </Styles.MineFieldOptions>

      <Styles.MineFieldOptions>{totalAvailablePins}</Styles.MineFieldOptions>

      <Styles.MineFieldBody>
        <Styles.MineFieldGame>
          {field.map((row, rowKey) => (
            <Styles.MineFieldRow key={`row-${rowKey}`}>
              {row.map((cell, cellKey) => {
                const cellNumber = rowKey * cols + cellKey;
                return (
                  <Styles.MineFieldCell
                    style={{ animationDelay: `${cellNumber / 200}s` }}
                    key={`cell-${rowKey}-${cellKey}`}
                    exploded={cell.exploded}
                    pinned={cell.pinned || exploded}
                    revealed={cell.revealed}
                    onClick={() => handleField(rowKey, cellKey)}
                    onContextMenu={e => pinCell(e, rowKey, cellKey)}
                    data-row={rowKey}
                    data-col={cellKey}
                    onMouseEnter={() => enterCell(rowKey, cellKey)}
                    onMouseLeave={() => leaveCell(rowKey, cellKey)}
                  >
                    {renderBombErrorIcon(cell)}
                    {renderFlag(cell)}
                    {renderRevealedCell(cell)}
                  </Styles.MineFieldCell>
                );
              })}
            </Styles.MineFieldRow>
          ))}
        </Styles.MineFieldGame>
      </Styles.MineFieldBody>
      {/**/}
    </Styles.MineFieldContent>
  );
};

export { Minefield };
