import { useState } from 'react';

const useFilter = (allItems, defaultValue) => {
  const [filterResult, setFilterResult] = useState(allItems);
  const [filterInput, setFilterInput] = useState(defaultValue);

  const filterItems = (allItems, query) => allItems.filter(query);

  const handleFilter = (e, allItems, query) => {
    const filterValue = e.target.value;
    setFilterInput(filterValue);

    const filteredAssets = filterItems(allItems, query);
    setFilterResult(filterValue !== defaultValue ? filteredAssets : allItems);
  };

  return { filterResult, filterInput, handleFilter };
};

export default useFilter;
