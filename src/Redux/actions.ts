import { DropResult } from 'react-beautiful-dnd';
import { SET_CARD, ADD_CARD, SET_LIST, ADD_LIST } from './actionTypes';

export const setList = (result: DropResult) => {
  return { type: SET_LIST, payload: { data: result } };
};

export const setCard = (result: DropResult) => {
  return { type: SET_CARD, payload: { data: result } };
};

export const addList = (title: string) => {
  return { type: ADD_LIST, payload: { name: title } };
};

export const addCard = (cardTitle: string, parentId: string | undefined) => {
  return {
    type: ADD_CARD,
    payload: { name: cardTitle, parentId: parentId },
  };
};
