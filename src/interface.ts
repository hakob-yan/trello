interface ICard {
  title: string;
  card: string[];
}
export interface IState {
  lists: Array<ICard>;
}

export interface IRow {
  id: string;
  content: string;
  parentId: string;
}
export interface IColumn {
  name: string;
  items: IRow[];
}

export interface IData {
  [key: string]: IColumn;
}

export interface IPayload {
  data: IData;
  name: string;
  parentId: string;
}
export interface IAction {
  type: string;
  payload: IPayload;
  index: number;
}
export interface IValue {
  name: string;
}
