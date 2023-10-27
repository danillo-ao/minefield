import React from 'react';

import { IconBomb } from '@tabler/icons-react';

import { random } from '@/utils/math.utils';

import { Field } from '@components/minefield/minefield.types';
import { fieldCell } from '@components/minefield/minefield.values';

import * as Styles from './minefield.styles';

const Minefield: React.FC = () => {
  const [rows] = React.useState<number>(15);
  const [cells] = React.useState<number>(15);
  const [bombs] = React.useState<number>(30);

  const [field, setField] = React.useState<Field>([]);

  const [bombsDefined, setBombsDefined] = React.useState<boolean>(false);
  const [fieldsDefined, setFieldsDefined] = React.useState<boolean>(false);

  /**
   *
   *
   */
  const createField = () => {
    if (fieldsDefined) return;

    // add rows
    const fieldRows = Array(rows).fill([]);
    const rowCells = Array(cells).fill(fieldCell);

    const _field = fieldRows.map(() => [...rowCells]);

    setFieldsDefined(true);
    setField(_field);
  };

  /**
   *
   */
  const defineBombs = () => {
    if (bombsDefined) return;

    if (field.length) {
      const _field = [...field];

      const maxBombs = rows * cells;

      for (let count = 0; count < Math.min(bombs, maxBombs); count++) {
        const row = random(rows);
        const cell = random(cells);

        if (_field[row][cell].bomb) {
          count--;
        } else {
          _field[row][cell] = { ..._field[row][cell], bomb: true };
        }
        // logField(_field);
      }

      setField(_field);
      setBombsDefined(true);
      countFields();
    }
  };

  const countCell = (row: number, cell: number) => {
    const rowBefore = row - 1;
    const rowAfter = row + 1;

    const cellBefore = cell - 1;
    const cellAfter = cell + 1;

    let count = 0;

    if (field[rowBefore]) {
      count += field[rowBefore]?.[cellBefore]?.bomb ? 1 : 0;
      count += field[rowBefore]?.[cell]?.bomb ? 1 : 0;
      count += field[rowBefore]?.[cellAfter]?.bomb ? 1 : 0;
    }

    if (field[rowAfter]) {
      count += field[rowAfter]?.[cellBefore]?.bomb ? 1 : 0;
      count += field[rowAfter]?.[cell]?.bomb ? 1 : 0;
      count += field[rowAfter]?.[cellAfter]?.bomb ? 1 : 0;
    }

    count += field[row]?.[cellBefore]?.bomb ? 1 : 0;
    count += field[row]?.[cellAfter]?.bomb ? 1 : 0;

    return count;
  };

  const countFields = () => {
    const _field = field.map((row, rowNumber) =>
      row.map((cell, cellNumber) => {
        if (!cell.bomb) {
          const count = countCell(rowNumber, cellNumber);
          return { ...cell, count };
        }
        return cell;
      }),
    );

    setField(_field);
  };

  const revealAllFields = () => {
    const revealedFields = field.map(row =>
      row.map(cell => ({ ...cell, revealed: true })),
    );
    setField(revealedFields);
  };

  const handleField = (row: number, cell: number) => {
    const _field = [...field];
    const clickedField = _field[row][cell];

    if (clickedField.revealed) return;
    if (clickedField.bomb) {
      revealAllFields();
      return;
    }

    _field[row][cell] = { ..._field[row][cell], revealed: true };
    setField(_field);

    revealAround(row, cell, _field);
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
      if (!topBefore.bomb && !topBefore.revealed) {
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
      if (!topMiddle.bomb && !topMiddle.revealed) {
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
      if (!topAfter.bomb && !topAfter.revealed) {
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
      if (!before.bomb && !before.revealed) {
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
      if (!after.bomb && !after.revealed) {
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
      if (!bottomBefore.bomb && !bottomBefore.revealed) {
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
      if (!bottomMiddle.bomb && !bottomMiddle.revealed) {
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
      if (!bottomAfter.bomb && !bottomAfter.revealed) {
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

  /**
   *
   * @param _field
   */
  const logField = (_field: Field) => {
    console.log('==============================');
    _field.map(row => {
      const string = row.map(cell =>
        cell.bomb ? '[*]' : `[${cell.count > 0 ? cell.count : '_'}]`,
      );
      console.log(string.join(''), ` ------ ${Math.random()} \n`);
    });
    console.log('==============================');
  };

  //
  //
  //
  //

  React.useEffect(() => {
    createField();
  }, []);

  React.useEffect(() => {
    defineBombs();
  }, [field]);

  return (
    <Styles.MineFieldContent>
      {field.map((row, rowKey) => (
        <Styles.MineFieldRow key={`row-${rowKey}`}>
          {row.map((cell, cellKey) => (
            <Styles.MineFieldCell
              key={`cell-${rowKey}-${cellKey}`}
              revealed={cell.revealed}
              onClick={() => handleField(rowKey, cellKey)}
            >
              {cell.pinned && <></>}
              {cell.revealed && (
                <>
                  {cell.bomb && <IconBomb size={20} />}

                  {cell.count > 0 && !cell.bomb && (
                    <Styles.FieldCount count={cell.count as any}>
                      {cell.count}
                    </Styles.FieldCount>
                  )}
                </>
              )}
            </Styles.MineFieldCell>
          ))}
        </Styles.MineFieldRow>
      ))}
    </Styles.MineFieldContent>
  );
};

export { Minefield };
