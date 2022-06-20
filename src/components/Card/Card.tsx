import React, { useMemo, ForwardedRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { IRow } from '../../interface';
import List from '../CreateList/CreateList';
import { AddCard } from '../../constants';
import * as listSelectors from '../../redux/selectors';

import './style.scss';
import { ICard } from './types';

const Card = React.forwardRef(
  ({ title, props, parentId }: ICard, ref: ForwardedRef<HTMLDivElement> | undefined) => {
    const [focus, setFocus] = useState<Boolean>(false);

    const cards = useSelector(listSelectors.selectCards(parentId));

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
                    className="card_input"
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
        <div className="title_input">{title}</div>
        {cardDraggables}
        <List parentId={parentId} feature={AddCard} setFocus={setFocus} focus={focus} />
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
