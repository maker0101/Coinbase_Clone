import { useState, useEffect } from 'react';

const useFilter = (allItems, defaultValue) => {
  const [filterResult, setFilterResult] = useState(allItems);
  const [filterInput, setFilterInput] = useState(defaultValue);

  const handleFilter = (e, allItems, query) => {
    const filterValue = e.target.value;
    setFilterInput(filterValue);

    const filteredAssets = allItems.filter(query);
    setFilterResult(filterValue !== defaultValue ? filteredAssets : allItems);
  };

  // TODO: Can I avoid "reinitializing" state? Currently needing it because state is initialized empty first (because data still fetching)?
  useEffect(() => {
    if (filterInput === defaultValue) setFilterResult(allItems);
  }, [allItems]);

  return { filterResult, filterInput, handleFilter };
};

export default useFilter;
