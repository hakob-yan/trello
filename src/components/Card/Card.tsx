import React, { useState } from 'react';
import './style.scss';
import List from '../List/List';
import { useSelector } from 'react-redux';
import { IState } from '../../interface';
interface IProps {
  title: string;
  index: number;
}
const Card = ({ title, index }: IProps) => {
  const [focus, setFocus] = useState<Boolean>(false);
  const cards = useSelector((state: IState) => state.lists[index].card);

  return (
    <div className="Card">
      <>
        <input className="TitleInput" type="text" defaultValue={title} />
        {cards.map((elem: any, i: number) => (
          <input key={`input-${i}`} className="CardInput" type="text" defaultValue={elem} />
        ))}
        <List index={index} feature="Add a card" setFocus={setFocus} focus={focus} />
      </>
    </div>
  );
};

export default Card;
