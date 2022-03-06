import './Search.css';
import { IoSearchOutline } from 'react-icons/io5';

const Search = ({ maxWidth = 250 }) => {
	return (
		<div className="Search">
			<input
				type="search"
				placeholder="Search all assets"
				className="search__bar"
				style={{ maxWidth: maxWidth }}
			/>
			<IoSearchOutline className="search__icon" />
		</div>
	);
};

export default Search;
