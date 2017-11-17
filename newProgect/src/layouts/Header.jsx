import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import superagent from 'superagent';
import { message } from 'antd';
import { request } from '../services/controller';
import { Menu, Icon } from 'antd'

import styles from './Header.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state= {
      current:'菜单一',
      headerData: [{ 
          key: "菜单一",
          label: "菜单一",
          path: "/demo/one"
        }, {
          key: "菜单二",
          label: "菜单二",
          path: ""
        }
      ],
    };
    this.init = this.init.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {   
    this.init();
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  init() {
    console.log("project init success, get start!")
  }
  
  render() {

    const {
      headerData,
    } = this.state;

    console.log("printf headerData", headerData)
    return (
      <header className={styles.header}>
        <Menu onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {
            headerData.map((item, index) => {
              return (
                <Menu.Item 
                  key={item.key}
                  className='nbugs-monitor'
                  data-category='nav'
                  data-action='click'
                  data-label={item.label}
                >
                  <Link 
                    key={item.key} 
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              )
            })
          }  
        </Menu>
      </header>
    );
  }
}

export default Header;