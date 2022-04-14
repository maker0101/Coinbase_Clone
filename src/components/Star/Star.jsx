import './Star.css';

import { HiOutlineStar, HiStar } from 'react-icons/hi';

import { db } from '../../firebase-config';
import { toggleOnWatchlist } from '../../utilities/toggle-on-watchlist';

const Star = ({ coin }) => {
  return (
    <div className='Star' onClick={() => toggleOnWatchlist(db, coin)}>
      {coin?.onWatchlist ? (
        <HiStar className='star__filled' />
      ) : (
        <HiOutlineStar className='star__empty' />
      )}
    </div>
  );
};

export default Star;
