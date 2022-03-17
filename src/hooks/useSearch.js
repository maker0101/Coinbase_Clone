import { useState, useEffect } from 'react';

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

  // TODO: Can/should I avoid reinitializing state with useEffect (doing it because state initialized empty first, because data still fetching)?
  const reInitializeSearchResult = (initialState) =>
    setSearchResult(initialState);

  useEffect(() => {
    if (!searchInput) reInitializeSearchResult(allItems);
  }, [allItems]);

  return { searchResult, searchInput, handleSearch };
};

export default useSearch;
