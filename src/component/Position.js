import React from 'react';

function Postion(props) {
  return (
    <select name="position" id="position">
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
    </select>
  );
}

export default Postion;
