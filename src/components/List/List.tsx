import React from 'react';
import { useSelector } from 'react-redux';
import { ListType } from '../../interface';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DropCard } from '../../constants';
import Card from '../Card/Card';
import { IList } from './types';

export const List = ({ provided }: { provided: IList }) => {
  const lists = useSelector((state: ListType) => state);
  return (
    <div {...provided.droppableProps} ref={provided.innerRef} className="loka">
      {Object.entries(lists).map(([id, value], index) => {
        return (
          <Draggable key={id} draggableId={id} index={index}>
            {(provided) => {
              return (
                <div
                  key={id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Droppable type={DropCard} droppableId={id}>
                    {(provided) => {
                      return (
                        <Card
                          ref={provided.innerRef}
                          props={provided.droppableProps}
                          title={value.name}
                          parentId={id}
                        />
                      );
                    }}
                  </Droppable>
                </div>
              );
            }}
          </Draggable>
        );
      })}
    </div>
  );
};
