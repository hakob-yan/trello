import React from 'react';
import './styles.scss';
import List from '../components/List/List';
import { useSelector } from 'react-redux';
import { IState } from '../interface';

const App: React.FC = () => {
  // const dispatch = useDispatch();
  const cards = useSelector((state: IState) => state.cards);
  return (
    <div className="App">
      {cards.map((elem, i) => (
        <List isFocus={false} key={`list-${i}`} />
      ))}
      {cards[0].title}
    </div>
  );
};

export default App;
