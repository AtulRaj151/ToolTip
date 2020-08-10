import React from 'react';
import '../assets/button.css';

function Button(props) {
  console.log(props.isMouseOver);
  if (props.isMouseOver) {
    return <div className="download">Download</div>;
  } else {
    return (
      <div className="download rr">
        <img src="https://image.flaticon.com/icons/svg/892/892625.svg"></img>
      </div>
    );
  }
}
export default Button;
