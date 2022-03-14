import './Dropdown.css';

const Dropdown = ({
  name,
  options,
  filterInput,
  handleFilter,
  filterQuery,
  allItems,
}) => {
  return (
    <select
      className='Dropdown'
      name={name}
      value={filterInput}
      onChange={(e) => handleFilter(e, allItems, filterQuery)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
