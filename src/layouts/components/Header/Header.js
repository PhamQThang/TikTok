import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faUpload,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faBookmark,
  faUser,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vie',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa',
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: 'Favorite',
    to: '/favorite',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];
function Header() {
  const currentUser = false;

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'Language':
        // Handle Change Language
        break;
      default:
        break;
    }
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('img-tiktok')}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="TikTok" />
          </Link>
        </div>
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <div className={cx('action-upload')}>
                <Button text leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                  Upload
                </Button>
              </div>

              <Tippy offset={[0, 12]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faUpload} />}>
                Upload
              </Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://tmdl.edu.vn/wp-content/uploads/2022/07/dao-le-phuong-hoa-la-ai-1.jpg"
                className={cx('user-avatar')}
                alt="Phuong Hoaaaa"
                fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pu6mDiPz5wZdxOmkzZeMombTmudB8GnMmg&usqp=CAU"
              />
            ) : (
              <button className={cx('more-button')}>
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
