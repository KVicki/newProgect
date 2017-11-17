import React, { Component, PropTypes } from 'react';
import SideBarLayout from './SideBarLayout';

class DemoLayout extends SideBarLayout {
  constructor(props) {
    super(props);
    this.state.dataSource = [
      {id:1, path: '', label: '子菜单1', type: "line-chart", },
      {id:2, path: '', label: '子菜单2', type: "edit", children: [
        {
          id: '2-1', path: '', label: '子菜单2-1',
        }, {
          id: '2-2', path: '', label: '子菜单2-1',
        }
      ]}
    ]
  }
}

DemoLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default DemoLayout;