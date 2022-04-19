import './Dropdown.css';

import { ChangeEvent, FC } from 'react';

interface DrodownProps {
  name: string;
  value: string;
  options: ['All assets', 'Watchlist'];
  onChange: (e: ChangeEvent) => void;
}

const Dropdown: FC<DrodownProps> = ({ name, value, options, onChange }) => {
  return (
    <select className='Dropdown' name={name} value={value} onChange={onChange}>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
