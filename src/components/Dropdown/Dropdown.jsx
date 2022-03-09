import './Dropdown.css';

const Dropdown = ({ name, options, initialValue = '' }) => {
	return (
		<select className="Dropdown" name={name} defaultValue={initialValue}>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
