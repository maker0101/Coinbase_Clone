import './Dropdown.css';

const Dropdown = ({ name, options, initialValue }) => {
	return (
		<select className="Dropdown" name={name} defaultValue={initialValue}>
			{options.map((option) => (
				<option key={option.value} value={option?.value}>
					{option?.text}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
