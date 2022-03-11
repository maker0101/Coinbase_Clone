import { useState } from 'react';

const useSearch = (allItems) => {
	const [searchResult, setSearchResult] = useState(allItems);
	const [searchInput, setSearchInput] = useState('');

	const filterItemsByText = (allItems, searchTerm) =>
		allItems.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

	const handleSearch = (e, allItems) => {
		const searchTerm = e.target.value;
		setSearchInput(searchTerm);

		const filteredItems = filterItemsByText(allItems, searchTerm);
		setSearchResult(searchTerm ? filteredItems : allItems);
	};

	return { searchResult, searchInput, handleSearch };
};

export default useSearch;
