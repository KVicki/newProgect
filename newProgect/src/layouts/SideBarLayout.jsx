import React, { Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';
import SideBar from '../layouts/SideBar';
import styles from './SideBarLayout.less';
import {
  Row,
  Col,
} from 'antd';

class SideBarLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
    this.init = this.init.bind(this)
  }

  componentDidMount() {
    this.init()
  }

  init() {
    console.log('sideBar component init success');
  }

  render() {
    const { dataSource } = this.state;
    return (
        <Row className={styles.main}>
          <Col xs={5} sm={5} md={4} lg={3} className={styles.mainSideBar}>
            <SideBar dataSource={dataSource} />
          </Col>
          <Col xs={19} sm={19} md={20} lg={21} className={styles.mainContent}>
            {this.props.children}
          </Col>
        </Row>
    )
  }
}


export default SideBarLayout;