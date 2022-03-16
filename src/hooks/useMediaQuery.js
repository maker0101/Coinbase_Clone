import { useState, useEffect } from 'react';

const isQueryMatching = (query) => window.matchMedia(query).matches;

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(isQueryMatching(query));

  const setQueryMatch = () => {
    if (isQueryMatching(query) !== matches) setMatches(isQueryMatching(query));
  };

  //FIXME: Terminal warning: React Hook useEffect has a missing dependency: 'setQueryMatch'.
  useEffect(() => {
    window.addEventListener('resize', setQueryMatch);
    return () => window.removeEventListener('resize', setQueryMatch);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
