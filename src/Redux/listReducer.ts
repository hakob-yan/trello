import { v4 as uuid } from 'uuid';
import { IAction, List } from '../interface';

const columnsFromBackend: List = {};

export const listReducer = (state: List = columnsFromBackend, { payload, type }: IAction): List => {
  switch (type) {
    case 'ADD_LIST': {
      const newState = { ...state };
      newState[uuid()] = {
        name: payload.name,
      };
      return newState;
    }

    default:
      return state;
  }
};
