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

  // TODO: Can I avoid "reinitializing" state? Currently needing it because state is initialized empty first (because data still fetching)?
  useEffect(() => {
    if (!searchInput) setSearchResult(allItems);
  }, [allItems]);

  return { searchResult, searchInput, handleSearch };
};

export default useSearch;
