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
    case 'SET_CARD': {
      const newState = { ...state };
      return onDragEnd(payload.data, newState);
    }
    case 'SET_LIST': {
      const source = payload.data.source.index;
      const dest = payload.data.destination.index;
      const newState = { ...state };
      const arrState = Object.entries(newState);

      switch (source <= dest) {
        case true:
          arrState.splice(dest + 1, 0, arrState[source]);
          arrState.splice(source, 1);
          break;
        case false:
          const removed = arrState.splice(source, 1);
          arrState.splice(dest, 0, removed[0]);
          break;
      }
      return Object.fromEntries(arrState);
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
