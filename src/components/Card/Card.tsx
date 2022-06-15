import React, { useMemo, ForwardedRef, useState } from 'react';
import { IRow, ListType } from '../../interface';
import './style.scss';
import List from '../List/List';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { AddCard } from '../../constants';
import { ICard } from './types';

const Card = React.forwardRef(
  ({ title, props, parentId }: ICard, ref: ForwardedRef<HTMLDivElement> | undefined) => {
    const [focus, setFocus] = useState<Boolean>(false);

    const cards = useSelector((state: ListType) => state[parentId].items);

    const cardDraggables = useMemo(
      () =>
        cards.map((item: IRow, i: number) => {
          return (
            <Draggable key={item.id} draggableId={item.id} index={i}>
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="cardInput"
                    style={provided.draggableProps.style}
                  >
                    {item.content}
                  </div>
                );
              }}
            </Draggable>
          );
        }),
      [cards]
    );

    return (
      <div {...props} ref={ref} className="card">
        <div className="titleInput">{title}</div>
        {cardDraggables}
        <List parentId={parentId} feature={AddCard} setFocus={setFocus} focus={focus} />
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
