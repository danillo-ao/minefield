export interface FieldCell {
  revealed: boolean;
  bomb: boolean;
  pinned: boolean;
  count: number;
}

export type FieldRows = FieldCell[];

export type Field = FieldRows[];
