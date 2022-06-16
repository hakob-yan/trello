import React, { useState } from 'react';
import { List } from '../components/List/List';
import CreateList from '../components/createList/CreateList';

import { useDispatch } from 'react-redux';

import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { DropList, MainId, AddList } from '../constants';
import { setCard, setList } from '../Redux/actions';
import './styles.scss';

const App = () => {
  const dispatch = useDispatch();

  const [focus, setFocus] = useState<boolean>(false);

  const onDragEnd = (result: DropResult) => {
    if (result.type === DropList) {
      dispatch(setList(result));
      return;
    }
    if (result.destination) {
      dispatch(setCard(result));
    }
  };

  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable direction="horizontal" type={DropList} droppableId={MainId}>
          {(provided) => {
            return <List provided={provided} />;
          }}
        </Droppable>
      </DragDropContext>
      <CreateList feature={AddList} setFocus={setFocus} focus={focus} />
    </div>
  );
};

export default App;
