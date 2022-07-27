import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import LinkContainer from './LinkContainer';

const cx = classNames.bind(styles);

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={cx('wrapper', 'separate')}>
      <LinkContainer>
        <Link to="/about" className={cx('link')}>
          About
        </Link>
        <Link to="/about" className={cx('link')}>
          Tiktok
        </Link>
        <Link to="/about" className={cx('link')}>
          Browser
        </Link>
        <Link to="/about" className={cx('link')}>
          Newsroom
        </Link>
        <Link to="/about" className={cx('link')}>
          Contact
        </Link>
        <Link to="/about" className={cx('link')}>
          Careers
        </Link>
        <Link to="/about" className={cx('link')}>
          ByteDance
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/about" className={cx('link')}>
          Tiktok for Good
        </Link>
        <Link to="/about" className={cx('link')}>
          Advertise
        </Link>
        <Link to="/about" className={cx('link')}>
          Developers
        </Link>
        <Link to="/about" className={cx('link')}>
          Transparency
        </Link>
        <Link to="/about" className={cx('link')}>
          Tiktok Rewards
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link to="/about" className={cx('link')}>
          Help
        </Link>
        <Link to="/about" className={cx('link')}>
          Safety
        </Link>
        <Link to="/about" className={cx('link')}>
          Terms
        </Link>
        <Link to="/about" className={cx('link')}>
          Privacy
        </Link>
        <Link to="/about" className={cx('link')}>
          Creator Portal
        </Link>
        <Link to="/about" className={cx('link')}>
          Community Guidelines
        </Link>
      </LinkContainer>

      <p className={cx('copyright')}>&copy; {currentYear} TikTok</p>
    </div>
  );
}

export default Footer;
