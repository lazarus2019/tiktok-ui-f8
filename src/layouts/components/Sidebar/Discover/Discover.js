import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import TagLink from '../../../../components/TagLink';

const cx = classNames.bind(styles);

function Discover({ title }) {
  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    setHashTags([
      {
        id: 1,
        title: 'mackedoi',
        type: 'tag',
        to: '/tag/',
      },
      {
        id: 2,
        title: 'suthatla',
        type: 'tag',
        to: '/tag/',
      },
      {
        id: 3,
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
        type: 'music',
        to: '/music',
      },
      {
        id: 4,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        type: 'music',
        to: '/music',
      },
      {
        id: 5,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim',
        type: 'music',
        to: '/music',
      },
      {
        id: 6,
        title: '7749hieuung',
        type: 'tag',
        to: '/tag',
      },
      {
        id: 7,
        title: 'genzlife',
        type: 'tag',
        to: '/tag',
      },
      {
        id: 8,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn Huyền Tâm Môn',
        type: 'music',
        to: '/music',
      },
      {
        id: 9,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version]',
        type: 'music',
        to: '/music',
      },
    ]);
  }, []);

  return (
    <div className={cx('wrapper', 'separate')}>
      <p className={cx('title')}>{title}</p>
      <div className={cx('hashtag-container')}>
        {hashTags.map((hashTag) => (
          <TagLink key={hashTag.id} data={hashTag} outline />
        ))}
      </div>
    </div>
  );
}

Discover.prototype = {
  title: PropTypes.string.isRequired,
};

export default Discover;
