import React from 'react';
import './style.scss';
interface IList {
  isFocus: boolean;
}

const List = ({ isFocus }: IList) => {
  if (isFocus) {
    return (
      <div className="AddList">
        <span className="Plus">+</span>
        <span className="ListText">Add List</span>
      </div>
    );
  } else {
    return (
      <div>
        <textarea
          className="TxtArea"
          spellCheck="false"
          autoFocus
          placeholder="Enter list title..."
        ></textarea>
        <button></button>
      </div>
    );
  }
};

export default List;
