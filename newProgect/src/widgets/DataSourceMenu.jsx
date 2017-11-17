import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import styles from './DataSourceMenu.less';

const SubMenu = Menu.SubMenu;

export default class DataSourceMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      theme: 'dark',
      direction: 'caret-right',
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick({ key }) {
    this.setState({
      current: key, 
    });
  }

  componentWillReceiveProps(props) {
    for (const item of props.dataSource) {
      if (item.children) {
        for (const sub of item.children) {
          if (location.pathname.indexOf(sub.path) !== -1) {
            this.setState({
              current: sub.path,
            });
          }
        }
      } else {
        if (location.pathname.indexOf(item.path) !== -1) {
          this.setState({
            current: item.path,
          });
        }
      }
    }
  }
  
  getActiveClass(pathname) {
    if (location.pathname.indexOf(pathname) !== -1) {
      return styles.tagBg;
    }
    return null;
  }

  renderMenuFromItem(item) {
    const menus = [];
    if (Array.isArray(item)) {
      item.forEach((p) => {
        menus.push(this.renderMenuFromItem(p));
      })
      return menus;
    }

    const createTitle = (item) => {
      return (
        <span>
          <Icon type={item.type} className={styles.iconType} />
          <span>{item.label}</span>
        </span>
      );
    }

    if (Array.isArray(item.children)) {
      menus.push(
        <SubMenu key={item.id} title={createTitle(item)} className={styles.group}>
        {
          item.children.map((child) => {
            return this.renderMenuFromItem(child);
          })
        }
        </SubMenu>
      );
    } else {
      menus.push(
        <Menu.Item key={item.path} className={`${styles.childMenu}`}>
          <Link to={item.path}>
            <Icon type={item.type} />
            {item.label}
          </Link>
        </Menu.Item>
      );
    }
    return menus;
  }

  render() {
    const dataSource = this.props.dataSource;
    let menus = this.renderMenuFromItem(dataSource);

    const { theme, current } = this.state;

    return (
      <Menu
        theme={theme}
        selectedKeys={[current]}
        onClick={this.onClick}
        className={styles.sideBarMenu}
        mode="inline">
        {menus}
      </Menu>
    );
  }
}
