import { IState } from '../interface';
interface IAction {
  type: string;
  payload: string;
}

const initialState = {
  cards: [
    { title: 'First', list: ['a', 'b'] },
    { title: 'Second', list: ['c', 'd'] },
  ],
};

export const listReducer = (state: IState = initialState, action: IAction) => {
  return state;
};
