import { IState } from '../interface';
interface IAction {
  type: string;
  payload: string;
}

const initialState = {
  cards: [{ title: 'First', list: ['a', 'b'] }],
};

export const listReducer = (state: IState = initialState, action: IAction) => {
  return state;
};
