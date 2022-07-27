import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles);

function Login({to, loginHint}) {
  return (
    <div className={cx('wrapper', 'separate')}>
      <p className={cx('login-hint')}>{loginHint}</p>
      <Button className={cx('login-btn')} to={to} outlinePrimary large>Log in</Button>
    </div>
  );
}

Login.prototype = {
  to: PropTypes.string.isRequired,
  loginHint: PropTypes.string.isRequired
}

export default Login;
