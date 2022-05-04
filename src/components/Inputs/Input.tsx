import './Input.css';

import { ComponentProps, FC } from 'react';

const Input: FC<ComponentProps<'input'>> = ({ ...inputProps }) => {
  return (
    <div className='Input'>
      <input {...inputProps} className='input__field' />
    </div>
  );
};

export default Input;
