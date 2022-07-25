import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  outlinePrimary = false,
  outlineText = false,
  outlineRound = false,
  small = false,
  large = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  children,
  className,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  // Remove event listener when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    outlineRound,
    large,
    disabled,
    outlinePrimary,
    outlineText,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.boolean,
  outline: PropTypes.boolean,
  outlinePrimary: PropTypes.boolean,
  outlineText: PropTypes.boolean,
  outlineRound: PropTypes.boolean,
  small: PropTypes.boolean,
  large: PropTypes.boolean,
  disabled: PropTypes.boolean,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
