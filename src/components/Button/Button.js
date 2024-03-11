import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  text,
  primary = false,
  outline = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //Remove Event Listener when Button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    leftIcon,
    rightIcon,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,

  text: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,

  className: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node,
};

export default Button;
