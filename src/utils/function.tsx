import * as Per from '../constants/consts';
import { IData } from '../interface';
import { ListType } from '../interface';
export const onDragEnd = (result: IData, state: ListType) => {
  if (!result.destination) return;
  if (result.type === Per.dropList) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = state[source.droppableId];
    const destColumn = state[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    return {
      ...state,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    };
  } else {
    if (result.type === Per.dropList) return;
    const column = state[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    return {
      ...state,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    };
  }
};
