import React, { useState } from 'react';
import { ListType } from '../interface';
import List from '../components/List/List';
import './styles.scss';
import Card from '../components/Card/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state: ListType) => state);
  const [focus, setFocus] = useState<boolean>(false);

  const onDragEnd = (result: any) => {
    if (result.destination) {
      console.log(result);

      dispatch({ type: 'SET_LIST', payload: { data: result } });
    }
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(lists).map(([id, value]) => {
          return (
            <Droppable key={id} droppableId={id}>
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
          );
        })}
      </DragDropContext>
      <List feature="Add a List" setFocus={setFocus} focus={focus} />
    </div>
  );
};

export default App;
