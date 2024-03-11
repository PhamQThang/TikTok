import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

import { HomeIcon, UserIcon, LiveIcon, ExploreIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as SuggestedService from '~/services/services';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    SuggestedService.suggestedAccount({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser((preUser) => [...preUser, ...data]);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserIcon />} />
        <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" data={suggestedUser} onSeeAll={handleSeeAll} />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
