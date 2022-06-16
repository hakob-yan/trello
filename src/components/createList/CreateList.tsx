import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCard, addList } from '../../Redux/actions';
import { AddCard, AddList } from '../../constants/global';

import './style.scss';
import { IList } from './types';

const List: React.FC<IList> = ({ focus, setFocus, feature, parentId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [cardTitle, setCardTitle] = useState('');

  // create a custom useBooleanState that will return [state, setTrue, setFalse, toggle]
  const handleOpen = () => {
    setFocus(true);
  };

  const handleClose = () => {
    setFocus(false);
  };

  const handleInput = () => {
    if (feature === AddList && title !== '') {
      dispatch(addList(title));
      setTitle('');
    } else if (feature === AddCard && cardTitle !== '') {
      dispatch(addCard(cardTitle, parentId));
      setCardTitle('');
    }
    setFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (feature === AddList) {
      setTitle(e.target.value);
    } else if (feature === AddCard) {
      setCardTitle(e.target.value);
    }
  };

  const handleBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    const list = e.relatedTarget?.className;
    if (list === 'add_button' || list === 'second_list' || list === 'list_input') {
      return false;
    }
    handleClose();
  };

  return focus ? (
    <div tabIndex={0} onBlur={handleBlur} className="second_list">
      <input
        autoFocus
        value={feature === AddList ? title : cardTitle}
        className="list_input"
        type="text"
        placeholder="Enter title.."
        onChange={handleChange}
      />
      <div>
        <input onClick={handleInput} className="add_button" type="button" value={feature} />
        <span onBlur={handleClose} onClick={handleClose} tabIndex={3} className="close">
          X
        </span>
      </div>
    </div>
  ) : (
    <div onClick={handleOpen} className={feature == AddList ? 'first_list' : 'other_list'}>
      <span className="plus">+</span>
      <span className="list_text">{feature}</span>
    </div>
  );
};

export default List;
