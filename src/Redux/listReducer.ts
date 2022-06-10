import { v4 as uuid } from 'uuid';
import { IAction, ListType } from '../interface';
import { onDragEnd } from '../utils/function';

const columnsFromBackend: ListType = {};

export const listReducer = (
  state: ListType = columnsFromBackend,
  { payload, type }: IAction
): ListType => {
  switch (type) {
    case 'ADD_LIST': {
      return {
        ...state,
        [uuid()]: {
          name: payload.name,
          items: [],
        },
      };
    }

    case 'ADD_CARD': {
      const newItem = {
        id: uuid(),
        content: payload.name,
      };
      const currentList = state[payload.parentId];

      return {
        ...state,
        [payload.parentId]: {
          ...currentList,
          items: [...currentList.items, newItem],
        },
      };
    }
    case 'SET_LIST': {
      const newState = { ...state };
      return onDragEnd(payload.data, newState);
    }

    default:
      return state;
  }
};

// export const cardReducer = (state: Array<IRow> = [], { type, payload }: IAction): Array<IRow> => {
//   switch (type) {
//     case 'ADD_CARD':
//       const newState = [...state];
//       newState.push({
//         id: uuid(),
//         parentId: payload.parentId,
//         index: newState.length + 1,
//         content: payload.name,
//       });
//       return newState;
//     case 'SET_LIST': {
//       const newState = { ...state };

//       return onDragEnd(payload.data, newState);
//     }
//     default:
//       return state;
//   }
// };
