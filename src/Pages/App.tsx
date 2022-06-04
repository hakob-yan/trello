import React, { useState } from 'react';
import './styles.scss';
import List from '../components/List/List';
import { useSelector } from 'react-redux';
import { IState } from '../interface';
import Card from '../components/Card/Card';

const App: React.FC = () => {
  // const dispatch = useDispatch();
  const [focus, setFocus] = useState<Boolean>(false);
  const cards = useSelector((state: IState) => state.cards);
  return (
    <div className="App">
      {cards.map((elem, i) => (
        <List setFocus={setFocus} focus={focus} key={`list-${i}`} />
      ))}
      <Card></Card>
    </div>
  );
};

export default App;
