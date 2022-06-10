import React, { useState } from 'react';
import { ListType } from '../../interface';
import './style.scss';
import List from '../List/List';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

interface ICard {
  title: string;
  props: any;
  parentId: string;
}

const Card = React.forwardRef(({ title, props, parentId }: ICard, ref) => {
  const [focus, setFocus] = useState<Boolean>(false);
  const cards = useSelector((state: ListType) => state[parentId].items);
  return (
    <div {...props} ref={ref} className="Card">
      <div className="TitleInput">{title}</div>

      {cards.map((item: any, i: number) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={i}>
            {(provided: any) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="CardInput"
                  style={{ ...provided.draggableProps.style }}
                >
                  {item.content}
                </div>
              );
            }}
          </Draggable>
        );
      })}
      <List parentId={parentId} feature="Add a card" setFocus={setFocus} focus={focus} />
    </div>
  );
});
Card.displayName = 'Card';
export default Card;
