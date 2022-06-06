import React, { useState } from 'react';
import './styles.scss';
import List from '../components/List/List';
import { useSelector } from 'react-redux';
import { IState } from '../interface';
import Card from '../components/Card/Card';

const App: React.FC = () => {
  // const dispatch = useDispatch();
  const [focus, setFocus] = useState<Boolean>(false);
  const cards = useSelector((state: IState) => state.lists);
  return (
    <div className="App">
      {cards.map((elem, i) => (
        <Card index={i} key={`list-${i}`} title={elem.title} />
      ))}

      <List feature="Add a List" setFocus={setFocus} focus={focus} />
    </div>
  );
};

export default App;
