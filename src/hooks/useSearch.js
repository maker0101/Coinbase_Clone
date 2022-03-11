import { useState } from 'react';

const useSearch = (allItems) => {
	const [searchResult, setSearchResult] = useState(allItems);
	const [searchInput, setSearchInput] = useState('');

	const filterItems = (allItems, searchTerm) =>
		allItems.filter((asset) =>
			asset.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

	const handleSearch = (e, allItems) => {
		const searchTerm = e.target.value;
		setSearchInput(searchTerm);

		const filteredAssets = filterItems(allItems, searchTerm);
		setSearchResult(searchTerm ? filteredAssets : allItems);
	};

	return { searchResult, searchInput, handleSearch };
};

export default useSearch;
