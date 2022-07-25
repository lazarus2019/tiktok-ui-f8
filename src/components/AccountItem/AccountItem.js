import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, ...passProps }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')} {...passProps}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.prototype = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
