import React from 'react';
import Button from './Button';
import '../assets/tooltip.css';
import ToolTip from './Tooltip';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: 'none',
    };
  }

  render() {
    return (
      <div className="main">
        <div className="select">
          <select name="position" id="position">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="container">
          <Button />
          <ToolTip />
        </div>
      </div>
    );
  }
}

export default App;
