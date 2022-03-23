import './Star.css';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import { toggleOnWatchlist } from '../../utilities/toggle-on-watchlist';
import { db } from '../../firebase-config';

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
