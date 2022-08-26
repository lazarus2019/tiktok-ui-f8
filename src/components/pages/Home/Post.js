import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Image from '../../Images';
import Button from '../../Button';
import TagLink from '../../TagLink';
import { Link } from 'react-router-dom';
import Player from '../../Player';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import AccountPreview from '../../AccountItem/AccountPreview';

const cx = classNames.bind(styles);

function Post({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={props} detail />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div className={cx('post')}>
      <div className={cx('info')}>
        <Link to={`/@${data.nickname}`}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        </Link>

        <div className={cx('text')}>
          <Tippy placement="bottom" interactive render={() => renderPreview(data)}>
            <Link to={`/@${data.nickname}`} className={cx('profile-link')}>
              <h5 className={cx('profile-username')}>{data.nickname}</h5>
              <span className={cx('profile-name')}>{data.full_name}</span>
            </Link>
          </Tippy>
          <p className={cx('description')}>Mếch nhẹ cho mấy pà xem nè</p>
          <TagLink
            data={{
              to: '/',
              type: 'music',
              title: 'Ngôi Sao Cô Đơn - Short Version - Jack - J97',
            }}
          />
          <div className={cx('video')}>
            <Player src="https://v16-webapp.tiktok.com/3d7affeb93c33c2196adf50b4cd94b80/62e3f934/video/tos/useast2a/tos-useast2a-pve-0037-aiso/6da6c5428de441d2a421140dd4850ea3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4228&bt=2114&btag=80000&cs=0&ds=3&ft=z_piDPWT2NvjVK_3bOzfuCYQFAe4nRQjlIp.5tOB&mime_type=video_mp4&qs=0&rc=aTkzPGU6ODc7aTZlM2U6M0Bpajl3ZDc6Zmd5ZDMzZjgzM0AzXzI0MzQuNjExYGE0My8yYSM2MnNgcjRvYGJgLS1kL2Nzcw%3D%3D&l=202207290913420102450021462625A14B" />
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
