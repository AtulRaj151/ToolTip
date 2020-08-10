import React from 'react';
import Button from './Button';
import '../assets/tooltip.css';
import ToolTip from './Tooltip';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 'top',
      isMouseOver: true,
    };
  }
  // function to set the position
  setPosition = (e) => {
    console.log(e.target.value);
    this.setState({
      position: e.target.value,
    });
  };

  // function to change state when mouse is on the button

  handleMouseOver = () => {
    this.setState({
      isMouseOver: false,
    });
  };

  // function to change state when mouse is on the button
  handleMouseLeave = () => {
    this.setState({
      isMouseOver: true,
    });
  };
  render() {
    // storing the position of the state
    const { position, isMouseOver } = this.state;
    console.log(isMouseOver);
    return (
      // select option menu for top left right and bottom
      <div className="main">
        <div className="select" onChange={this.setPosition}>
          <select name="position" id="position">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        {/* container that renders the button and tooltip */}
        <div className="container">
          <div
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            <Button isMouseOver={isMouseOver} />
          </div>
          <ToolTip position={position} />{' '}
          {/*  passing position to tooltip component  */}
        </div>
      </div>
    );
  }
}

export default App;
