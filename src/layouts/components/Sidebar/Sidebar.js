import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import Login from './Login';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '../../../components/Icons';
import AccountContainer from './AccountContainer';
import Discover from './Discover';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('wrapper-container')}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
          />
          <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>
        <Login to="/login" loginHint="Log in to follow creators, like videos, and view comments." />
        <AccountContainer title="Suggested accounts" type='suggest'/>
        <AccountContainer title="Following accounts" type='following'/>
        <Discover title="Discover" />
        <Footer />
      </div>
    </aside>
  );
}

export default Sidebar;
