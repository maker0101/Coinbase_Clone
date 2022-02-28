import './Star.css';
import { useState } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const Star = () => {
	const [isWatching, setIsWatching] = useState(false);

	const toggleIsWatching = () => setIsWatching(() => !isWatching);

	return (
		<div className="Star" onClick={toggleIsWatching}>
			{isWatching ? (
				<HiStar className="star__filled" />
			) : (
				<HiOutlineStar className="star__empty" />
			)}
		</div>
	);
};

export default Star;
