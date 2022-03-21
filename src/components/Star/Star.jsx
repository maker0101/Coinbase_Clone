import './Star.css';
import { useState, useEffect } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const Star = ({ onWatchlist }) => {
  const [isOnWatchlist, setisOnWatchlist] = useState(onWatchlist);

  const toggleisOnWatchlist = () => setisOnWatchlist(() => !isOnWatchlist);

  // TODO: Can I avoid "reinitializing" state? Currently needing it because state is initialized empty first (because data still fetching)?
  useEffect(() => {
    setisOnWatchlist(onWatchlist);
  }, [onWatchlist]);

  return (
    <div className='Star' onClick={toggleisOnWatchlist}>
      {isOnWatchlist ? (
        <HiStar className='star__filled' />
      ) : (
        <HiOutlineStar className='star__empty' />
      )}
    </div>
  );
};

export default Star;
