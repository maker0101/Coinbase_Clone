import './Search.css';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
	return (
		<div className="Search">
			<input
				type="search"
				placeholder="Search all assets"
				className="search__bar"
			/>
			<IoSearchOutline className="search__icon" />
		</div>
	);
};

export default Search;
