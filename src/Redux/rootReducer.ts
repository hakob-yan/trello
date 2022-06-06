import { IState } from '../interface';
interface IAction {
  type: string;
  payload: string;
  index: number;
}

const initialState = {
  lists: [],
};

export const listReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { title: action.payload, card: [] }] };
      break;
    case 'ADD_CARD':
      const list = state.lists;

      list[action.index] = {
        ...list[action.index],
        card: [...list[action.index].card, action.payload],
      };

      return { ...state, lists: list };
      break;
    default:
      return state;
      break;
  }
  return state;
};
