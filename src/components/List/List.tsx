import React from 'react';
import './style.scss';
interface IList {
  focus: Boolean;
  setFocus: Function;
}

const List = ({ focus, setFocus }: IList) => {
  const handleClick = () => {
    setFocus(true);
  };
  const handleClose = () => {
    setFocus(false);
  };

  if (!focus) {
    return (
      <div tabIndex={0} onFocus={handleClick} className="FirstList">
        <span className="Plus">+</span>
        <span className="ListText">Add List</span>
      </div>
    );
  } else {
    return (
      <div tabIndex={2} className="SecondList">
        <input
          spellCheck={false}
          className="ListInput"
          type="text"
          placeholder="Enter list title.."
        ></input>
        <div>
          <input className="AddButton" type="button" value={'Add list'} />
          <span onClick={handleClose} tabIndex={3} className="Close">
            X
          </span>
        </div>
      </div>
    );
  }
};

export default List;
