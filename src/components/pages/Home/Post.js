import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { PlayVideoIcon, PauseVideoIcon } from '../../Icons';
import Image from '../../Images';
import Button from '../../Button';
import TagLink from '../../TagLink';
import Video from '../../Video/Video';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Post({ data }) {
  const [play, setPlay] = useState(false)
  const videoRef = useRef();

  return (
    <div className={cx('post')}>
      <div className={cx('info')}>
        <Link to={`/@${data.nickname}`}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        </Link>

        <div className={cx('text')}>
          <Link to={`/@${data.nickname}`} className={cx('profile-link')}>
            <h5 className={cx('profile-username')}>{data.nickname}</h5>
            <span className={cx('profile-name')}>{data.full_name}</span>
          </Link>
          <p className={cx('description')}>Mếch nhẹ cho mấy pà xem nè</p>
          <TagLink
            data={{
              to: '/',
              type: 'music',
              title: 'Ngôi Sao Cô Đơn - Short Version - Jack - J97',
            }}
          />
          <div className={cx('video')}>
            <Video
              ref={videoRef}
              src="https://v16.tiktokcdn.com/f5829fa19b1c50ec64306d7d8805dcf5/62e15cf2/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e09385f78f7e4068aa93d2434f4faa3a/?a=1180&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5048&bt=2524&btag=80000&cs=0&ds=3&ft=lUxRYHk_Myq8ZYth5we2NVRgml7Gb&mime_type=video_mp4&qs=0&rc=OzkzNDY0ZGg0NjQ4Z2U0NUBpajZlczY6Zm91ZDMzZjgzM0AwNC4zMzYwNjIxLTI1XmAxYSNna2FwcjRfLy5gLS1kL2Nzcw%3D%3D&l=202207270942210102510582202413969E&cc=2"
            >
              {play ? (
                <>
                  <span className={cx('icon')} onClick={() => setPlay(!play)}>
                    <PauseVideoIcon />
                  </span>
                </>
              ) : (
                <>
                  <span className={cx('icon')} onClick={() => setPlay(!play)}>
                    <PlayVideoIcon />
                  </span>
                </>
              )}
            </Video>
            <div className={cx('actions')}></div>
          </div>
        </div>

        <div className={cx('follow-btn')}>
          <Button outlinePrimary small>
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
}

Post.prototype = {
  data: PropTypes.object.isRequired,
};

export default Post;
