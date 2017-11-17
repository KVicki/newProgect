import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Link,
} from 'react-router';

import DataSourceMenu from '../widgets/DataSourceMenu';
import styles from './SideBar.less';

export default class SideBar extends Component {
  render() {
    console.log('sidebar Data', this.props.dataSource)
    return (
      <div className={styles.content}>
        <div className={styles.sideBg}>
          <DataSourceMenu dataSource={this.props.dataSource} />
        </div>
      </div>
    )
  }
}