import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faQuestionCircle,
  faUser,
  faCog,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Menu from '../../../Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '../../../Icons/';
import Image from '../../../Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          type: 'language',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          type: 'language',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const currentUser = true;

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        console.log(menuItem.code);
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faTiktok} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faCog} />,
      title: 'Settings',
      children: {
        title: 'Settings',
        data: [
          {
            title: 'Dark mode',
            value: true,
          },
        ],
      },
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} offset={[0]} content="Upload video" placement="bottom">
                <button className={cx('action-icon')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} offset={[0]} content="Messages" placement="bottom">
                <button className={cx('action-icon')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} offset={[0]} content="Notifications" placement="bottom">
                <button className={cx('action-icon')}>
                  <span className={cx('amount')}>99+</span>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outlineText leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/101f2bd32cb11214b9b54a4645ce325a~c5_300x300.webp?x-expires=1658721600&x-signature=kYehYxZ6SLue8wXYDLK0ySPEmYA%3D"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
