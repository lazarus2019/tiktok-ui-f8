import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountContainer.module.scss';
import AccountList from './AccountList';


const cx = classNames.bind(styles);

function AccountContainer({ title, type }) {
  return (
    <div className={cx('wrapper', 'separate')}>
      <p className={cx('title')}>{title}</p>
      <AccountList type={type}/>
    </div>
  );
}

AccountContainer.prototype = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default AccountContainer;
