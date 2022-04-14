import './Text.css';

import classNames from 'classnames';

const Text = ({ children, h1, h2, h3, size, weight, color, uppercase }) => {
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
