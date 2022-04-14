import './Search.css';

import { IoSearchOutline } from 'react-icons/io5';

const Search = ({ searchInput, handleSearch, allItems }) => {
  return (
    <div className='Search'>
      <input
        type='search'
        placeholder='Search all assets'
        className='search__bar'
        value={searchInput}
        onChange={(e) => handleSearch(e, allItems)}
      />
      <IoSearchOutline className='search__icon' />
    </div>
  );
};

export default Search;
