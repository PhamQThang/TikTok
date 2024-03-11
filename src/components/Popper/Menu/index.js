import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <HeadlessTippy
      offset={[15, 10]}
      delay={[0, 300]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((pre) => pre.slice(0, 1))}
    >
      {children}
    </HeadlessTippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  items: PropTypes.array,
  onChange: PropTypes.func,
};
export default Menu;
