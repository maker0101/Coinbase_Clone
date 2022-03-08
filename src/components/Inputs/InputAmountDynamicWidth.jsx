import './InputAmountDynamicWidth.css';
import { useState } from 'react';

const InputAmountDynamicWidth = () => {
	const [inputLength, setInputLength] = useState(0);
	const inputWidth = (chars) => (chars === 0 ? 50 : chars * 50);

	return (
		<input
			className="InputAmountDynamicWidth"
			type="number"
			min="1"
			max="999999"
			placeholder={0}
			style={{ width: inputWidth(inputLength) + 'px' }}
			onChange={(e) => setInputLength(e.target.value.length)}
		/>
	);
};

export default InputAmountDynamicWidth;
