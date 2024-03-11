import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccoutItem from './AccoutItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onSeeAll }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {data.map((account, index) => (
        <AccoutItem key={index} data={account} />
      ))}

      <p className={cx('more-btn')} onClick={onSeeAll}>
        See all
      </p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
