import React from 'react';

function ToolTip(props) {
  const { position } = props;
  return (
    <div className={`tooltip w3-container w3-indigo w3-padding-16 ${position}`}>
      Size::50MB
    </div>
  );
}

export default ToolTip;
