export interface IRow {
  id: string;
  content: string;
}

export type ListType = { [key: string]: { name: string; items: Array<IRow> } };

export interface IPayload {
  name: string;
  parentId: string;
  data: any;
}
export interface IAction {
  type: string;
  payload: IPayload;
}
