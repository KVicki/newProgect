import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
// import './index.css';
import { Row, Col } from 'antd';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      visiable: false,
    }
  }

  render() {
    return (
      <div style={{textAlign: "center", marginTop: 200}}>
        <Row type="flex" justify="center">
          <Col span={24}>欢迎使用 `nbugs-cli` 初始化一个 react app. thanks all</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24}>email: 980751937mu@gmail.com</Col>
        </Row>
      </div>
    )
  }
}

export default App