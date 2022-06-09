export interface IRow {
  id: string;
  content: string;
  parentId: string;
  index: number;
}

export type List = { [key: string]: { name: string } };

export interface IState {
  cards: Array<IRow>;
  lists: List;
}

export interface IPayload {
  name: string;
  parentId: string;
  data: any;
}
export interface IAction {
  type: string;
  payload: IPayload;
  index: number;
}
