import React from 'react';
import './style.css';

function FilterButtonWrapper(props) {
  return <div className="button-wrapper">{props.children}</div>
}

export default FilterButtonWrapper;