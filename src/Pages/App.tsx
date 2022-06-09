import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import List from '../components/List/List';
import Card from '../components/Card/Card';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { IState } from '../interface';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state: IState) => state.lists);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(result) => dispatch({ type: 'SET_LIST', payload: { data: result } })}
      >
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
