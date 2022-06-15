import React, { useState } from 'react';
import { ListType } from '../interface';
import List from '../components/List/List';
import './styles.scss';
import Card from '../components/Card/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { DropList, DropCard, MainId, AddList } from '../constants';
import { setCard, setList } from '../Redux/actions';

const App = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state: ListType) => state);
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
          }}
        </Droppable>
      </DragDropContext>
      <List feature={AddList} setFocus={setFocus} focus={focus} />
    </div>
  );
};

export default App;
