import { ListType } from '../interface';

export const selectCards = (parentId: string) => (state: ListType) => state[parentId].items;

export const selectLists = (state: ListType) => state;
