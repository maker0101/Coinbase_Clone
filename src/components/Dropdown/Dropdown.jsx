import './Dropdown.css';

const Dropdown = ({ name, options, value, onChange }) => {
  return (
    <select className='Dropdown' name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
