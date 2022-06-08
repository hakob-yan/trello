// import { IState } from '../interface';
import { v4 as uuid } from 'uuid';
import { IData, IAction, IValue } from '../interface';

const columnsFromBackend: IData = {};

export const listReducer = (
  state: IData = columnsFromBackend,
  { payload, type }: IAction
): IData => {
  switch (type) {
    case 'ADD_LIST': {
      // TODO dont mutate state
      state[uuid()] = {
        name: payload.name,
        items: [],
      };
      return state;
    }

    case 'SET_LIST': {
      return payload.data;
    }

    case 'ADD_CARD': {
      Object.entries(state).map(([key, value]: [string, IValue]) => {
        // TODO dont mutate state
        if (key === payload.parentId) {
          console.log(true);

          state[key].items.push({ id: uuid(), content: payload.name, parentId: payload.parentId });
        }
      });
      return state;
    }

    default:
      return state;
  }
  return state;
};
