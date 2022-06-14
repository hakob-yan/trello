import React, { useState } from 'react';
import { IData, ListType } from '../interface';
import List from '../components/List/List';
import './styles.scss';
import Card from '../components/Card/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import * as Per from '../constants/consts';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state: ListType) => state);
  const [focus, setFocus] = useState<boolean>(false);

  const onDragEnd = (result: IData) => {
    if (result.type === Per.dropList) {
      dispatch({ type: 'SET_LIST', payload: { data: result } });

      return;
    }
    if (result.destination) {
      dispatch({ type: 'SET_CARD', payload: { data: result } });
    }
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={() => onDragEnd}>
        <Droppable direction="horizontal" type={Per.dropList} droppableId="sdsdsd54aghhgs">
          {(provided) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef} className="loka">
                {Object.entries(lists).map(([id, value], index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="DroppableDiv"
                            key={id}
                          >
                            <Droppable type={Per.dropCard} droppableId={id}>
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
      <List feature="Add a List" setFocus={setFocus} focus={focus} />
    </div>
  );
};

export default App;
