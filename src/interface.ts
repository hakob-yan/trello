export interface IRow {
  id: string;
  content: string;
}
export interface IData {
  source: { index: number; droppableId: string };
  destination: { index: number; droppableId: string };
  type: string;
}

export type ListType = { [key: string]: { name: string; items: Array<IRow> } };

export interface IPayload {
  name: string;
  parentId: string;
  data: IData;
}

export interface IAction {
  type: string;
  payload: IPayload;
}
