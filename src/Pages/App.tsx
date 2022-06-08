import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import List from '../components/List/List';
import { useSelector } from 'react-redux';
// import { IState } from '../interface';
import Card from '../components/Card/Card';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../utils/function';
import { IData } from '../interface';

const selectData = (state: IData) => state;

const App: React.FC = () => {
  const dipatch = useDispatch();

  const columns = useSelector(selectData);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="App">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, dipatch)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable key={id} droppableId={id}>
              {(provided, snapshot) => {
                return (
                  <Card
                    items={column.items}
                    ref={provided.innerRef}
                    props={provided.droppableProps}
                    title={column.name}
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
