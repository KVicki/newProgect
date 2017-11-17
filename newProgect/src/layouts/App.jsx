import React, { Component, PropTypes } from 'react';
import superagent from 'superagent';
import Header from './Header';


class App extends Component {
  constructor(){
    super();
    this.state = {
      visiable: false,
    }
  }
  
  render() {
    console.log("init a react project")
    return (
      <div style={{ height: '100%' }}>             
        <Header />
        {this.props.children}  
      </div>
    );
  }
}

export default App;