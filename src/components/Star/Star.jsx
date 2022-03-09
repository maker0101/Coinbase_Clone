import './Star.css';
import { useState } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const Star = ({ onWatchlist }) => {
	const [isOnWatchlist, setisOnWatchlist] = useState(onWatchlist);

	const toggleisOnWatchlist = () => setisOnWatchlist(() => !isOnWatchlist);

	return (
		<div className="Star" onClick={toggleisOnWatchlist}>
			{isOnWatchlist ? (
				<HiStar className="star__filled" />
			) : (
				<HiOutlineStar className="star__empty" />
			)}
		</div>
	);
};

export default Star;
