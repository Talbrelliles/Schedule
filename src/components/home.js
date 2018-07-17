import React, { Component } from 'react';

import Library from './Library/library';
import Schedule from './Schedule/schedule';

class Home extends Component {
  render() {
    return (
      <div className="home">
     
        <Library/>
        <Schedule/>
      </div>
    );
  }
}

export default Home;