import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview({ data, detail }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src={data.avatar} alt="" />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>{data.nickname}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>1.9M&nbsp;</strong>
          <strong className={cx('label')}>Followers</strong>
          <strong className={cx('value')}>6.9M&nbsp;</strong>
          <strong className={cx('label')}>Likes</strong>
        </p>
      </div>
      {detail ? (
        <div className={cx('detail')}>
          <div className="separate"></div>
          <p className={cx('bio')}>{data.bio}</p>
        </div>
      ) : null}
    </div>
  );
}

export default AccountPreview;
