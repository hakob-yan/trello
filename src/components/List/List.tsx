import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
interface IList {
  focus: Boolean;
  setFocus: Function;
  feature: string;
  index?: number;
  parentId?: string;
}
const List = ({ focus, setFocus, feature, parentId }: IList) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [cardTitle, setCardTitle] = useState('');

  const handleOpen = () => {
    setFocus(true);
  };

  const handleClose = () => {
    setFocus(false);
  };

  const handleInput = () => {
    if (feature === 'Add a List' && title !== '') {
      dispatch({ type: 'ADD_LIST', payload: { name: title } });
      setTitle('');
    } else if (feature === 'Add a card' && cardTitle !== '') {
      dispatch({
        type: 'ADD_CARD',
        payload: { name: cardTitle, parentId: parentId },
      });
      setCardTitle('');
    }
    setFocus(false);
  };

  const handleChange = (e: any) => {
    if (feature === 'Add a List') {
      setTitle(e.target.value);
    } else if (feature === 'Add a card') {
      setCardTitle(e.target.value);
    }
  };

  if (!focus) {
    return (
      <div onClick={handleOpen} className={feature == 'Add a List' ? 'FirstList' : 'OtherList'}>
        <span className="Plus">+</span>
        <span className="ListText">{feature}</span>
      </div>
    );
  }
  return (
    <div
      tabIndex={0}
      onBlur={(e) => {
        const list = e.relatedTarget?.className;
        if (list === 'AddButton' || list === 'SecondList' || list === 'ListInput') {
          return false;
        }
        handleClose();
      }}
      className="SecondList"
    >
      <input
        autoFocus
        value={feature === 'Add a List' ? title : cardTitle}
        spellCheck={false}
        className="ListInput"
        type="text"
        placeholder="Enter title.."
        onChange={handleChange}
      />
      <div>
        <input onClick={handleInput} className="AddButton" type="button" value={feature} />
        <span onBlur={handleClose} onClick={handleClose} tabIndex={3} className="Close" />
      </div>
    </div>
  );
};

export default List;
