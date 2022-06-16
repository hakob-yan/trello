export interface IList {
  innerRef: (element: HTMLElement | null) => HTMLElement | null;
  droppableProps: {
    ['data-rbd-droppable-context-id']: string;
    ['data-rbd-droppable-id']: string;
  };
}
