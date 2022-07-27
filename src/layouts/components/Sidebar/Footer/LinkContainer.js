import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function LinkContainer({ children }) {
  return <div className={cx('link-container')}>{children}</div>;
}

LinkContainer.prototype = {
  children: PropTypes.node.isRequired,
};

export default LinkContainer;
