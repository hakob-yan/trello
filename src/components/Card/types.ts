import { DroppableProvidedProps } from 'react-beautiful-dnd';

export interface ICard {
  title: string;
  props: DroppableProvidedProps;
  parentId: string;
}
