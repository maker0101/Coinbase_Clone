import './Button.css';

import { ComponentProps, FC } from 'react';

import classNames from 'classnames';

interface ButtonProps extends ComponentProps<'button'> {
  children: string;
  light?: boolean;
  stretch?: boolean;
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'md' | 'xl' | 'xxl';
}

const Button: FC<ButtonProps> = ({
  children,
  light,
  stretch,
  color,
  size,
  ...buttonProps
}) => {
  const btnClasses = classNames({
    Button: true,
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
    <button {...buttonProps} className={btnClasses}>
      {children}
    </button>
  );
};

export default Button;
