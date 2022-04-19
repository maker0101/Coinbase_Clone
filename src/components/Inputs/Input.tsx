import './Input.css';

import { FC, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  minLength?: number;
  onChange: () => any;
}

const Input: FC<InputProps> = ({
  name,
  value,
  placeholder = 'Type here',
  autoComplete = 'off',
  type = 'text',
  required = false,
  minLength = 0,
  onChange,
}) => {
  return (
    <div className='Input'>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        required={required}
        minLength={minLength}
        onChange={onChange}
        className='input__field'
      />
    </div>
  );
};

export default Input;
