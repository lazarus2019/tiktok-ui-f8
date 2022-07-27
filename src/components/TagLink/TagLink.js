import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './TagLink.module.scss';

const cx = classNames.bind(styles);

function TagLink({ data, outline = false }) {
  const setIcon = () => {
    switch (data.type) {
      case 'tag':
        return faHashtag;
      case 'music':
        return faMusic;
      default:
        throw new Error('Unidentified type ', data.type);
    }
  };

  const classes = cx('hashtag', {
    outline
  })

  return (
    <Link to={data.to} className={classes}>
      <FontAwesomeIcon icon={setIcon()} className={cx('icon')} />
      <span className={cx('title')}>{data.title}</span>
    </Link>
  );
}

TagLink.prototype = {
  data: PropTypes.object.isRequired,
};

export default TagLink;
