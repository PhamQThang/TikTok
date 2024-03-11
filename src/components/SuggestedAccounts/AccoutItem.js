import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import AccoutPreview from './AccountPreview/AccoutPreview';

const cx = classNames.bind(styles);

function AccoutItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccoutPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy offset={[40, 10]} interactive placement="bottom" delay={[400, 0]} render={renderPreview}>
        <div className={cx('accout-item')}>
          <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              {data.nickname} {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{`${data.last_name} ${data.first_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccoutItem;
