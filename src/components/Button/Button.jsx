import './Button.css';

import classNames from 'classnames';

const Button = ({
  children,
  color,
  disabled,
  light,
  size,
  stretch,
  onClick,
  type,
}) => {
  const btnClasses = classNames({
    Button: true,
    'btn-primary': color === 'primary',
    'btn-secondary': color === 'secondary',
    'btn-danger': color === 'danger',
    'btn-md': size === 'md',
    'btn-xl': size === 'xl',
    'btn-xxl': size === 'xxl',
    'btn-stretch': stretch,
    'btn-disabled': disabled,
    'btn-light': light,
  });

  return (
    <button className={btnClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
