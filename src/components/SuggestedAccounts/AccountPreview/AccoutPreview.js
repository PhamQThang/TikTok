import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccoutPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          {data.nickname}
          {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>{`${data.last_name} ${data.first_name}`}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{data.followers_count} </strong>
          <span className={cx('label')}>Followers </span>
          <strong className={cx('value')}>{data.likes_count} </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccoutPreview;
