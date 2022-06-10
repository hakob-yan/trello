export const onDragEnd = (result: any, state: any) => {
  if (!result.destination) return;
  const { source, destination } = result;
  console.log(state);
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = state[source.droppableId];
    console.log(sourceColumn);

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
