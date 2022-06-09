import { IAction, IRow } from '../interface';
import { v4 as uuid } from 'uuid';
import { onDragEnd } from '../utils/function';

export const cardReducer = (state: Array<IRow> = [], { type, payload }: IAction): Array<IRow> => {
  switch (type) {
    case 'ADD_CARD':
      const newState = [...state];
      newState.push({
        id: uuid(),
        parentId: payload.parentId,
        index: newState.length + 1,
        content: payload.name,
      });
      return newState;
    case 'SET_LIST': {
      const newState = { ...state };

      return onDragEnd(payload.data, newState);
    }
    default:
      return state;
  }
};
