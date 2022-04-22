import './Dropdown.css';

import { ComponentProps, FC } from 'react';

interface DropdownProps extends ComponentProps<'select'> {
  options: string[];
}

const Dropdown: FC<DropdownProps> = ({ options, ...selectProps }) => {
  return (
    <select className='Dropdown' {...selectProps}>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
