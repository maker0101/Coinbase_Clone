import './Button.css';

import { FC } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  light?: boolean;
  stretch?: boolean;
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'md' | 'xl' | 'xxl';
  type?: 'submit';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  light,
  stretch,
  color,
  size,
  type,
  onClick,
}) => {
  const btnClasses = classNames({
    Button: true,
    'btn-disabled': disabled,
    'btn-light': light,
    'btn-stretch': stretch,
    'btn-primary': color === 'primary',
    'btn-secondary': color === 'secondary',
    'btn-danger': color === 'danger',
    'btn-md': size === 'md',
    'btn-xl': size === 'xl',
    'btn-xxl': size === 'xxl',
  });

  return (
    <button className={btnClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
