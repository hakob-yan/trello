import React, { useState } from 'react';
import './style.scss';
import List from '../List/List';
import { Draggable } from 'react-beautiful-dnd';
interface IProps {
  title: string;
  items: any[];
  props: any;
  parentId: string;
}

const Card = React.forwardRef(({ title, items, props, parentId }: IProps, ref) => {
  const [focus, setFocus] = useState<Boolean>(false);
  // const columns = useSelector(selectData);
  return (
    <div {...props} ref={ref} className="Card">
      <div className="TitleInput">{title}</div>
      {items.map((item: any, i: number) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={i}>
            {(provided: any, snapshot: any) => {
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
