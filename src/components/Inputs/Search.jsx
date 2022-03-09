import './Search.css';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
	const [searchInput, setSearchInput] = useState('');

	return (
		<div className="Search">
			<input
				type="search"
				placeholder="Search all assets"
				className="search__bar"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			<IoSearchOutline className="search__icon" />
		</div>
	);
};

export default Search;
