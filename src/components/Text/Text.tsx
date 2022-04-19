import './Text.css';

import { FC } from 'react';
import classNames from 'classnames';

interface TextProps {
  children: string;
  h1: boolean;
  h2: boolean;
  h3: boolean;
  uppercase: boolean;
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  weight: '400' | '500' | '600' | '700';
  color: 'black' | 'white' | 'grey' | 'blue' | 'red' | 'green';
}

const Text: FC<TextProps> = ({
  children,
  h1,
  h2,
  h3,
  uppercase,
  size,
  weight,
  color,
}) => {
  const textClasses = classNames({
    Text: true,
    'text-h1': h1,
    'text-h2': h2,
    'text-h3': h3,
    'text-xxl': size === 'xxl',
    'text-xl': size === 'xl',
    'text-l': size === 'l',
    'text-m': size === 'm',
    'text-s': size === 's',
    'text-xs': size === 'xs',
    'text-700': weight === '700',
    'text-600': weight === '600',
    'text-500': weight === '500',
    'text-400': weight === '400',
    'text-black': color === 'black',
    'text-white': color === 'white',
    'text-grey': color === 'grey',
    'text-blue': color === 'blue',
    'text-red': color === 'red',
    'text-green': color === 'green',
    'text-uppercase': uppercase,
  });

  return (
    <>
      {h1 && <h1 className={textClasses}>{children}</h1>}
      {h2 && <h2 className={textClasses}>{children}</h2>}
      {h3 && <h3 className={textClasses}>{children}</h3>}
      {!(h1 || h2 || h3) && <p className={textClasses}>{children}</p>}
    </>
  );
};

export default Text;
