import './Search.css';

import { ChangeEvent, FC } from 'react';

import { IoSearchOutline } from 'react-icons/io5';

interface SearchProps {
  searchInput: string;
  allItems: [];
  handleSearch: (e: ChangeEvent, allItems: []) => void;
}

const Search: FC<SearchProps> = ({ searchInput, handleSearch, allItems }) => {
  return (
    <div className='Search'>
      <input
        type='search'
        value={searchInput}
        placeholder='Search all assets'
        onChange={(e) => handleSearch(e, allItems)}
        className='search__bar'
      />
      <IoSearchOutline className='search__icon' />
    </div>
  );
};

export default Search;
