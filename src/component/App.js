import React from 'react';
import Button from './Button';
import '../assets/tooltip.css';
import ToolTip from './tooltipPositions';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <Button />
        <ToolTip />
      </div>
    );
  }
}

export default App;
