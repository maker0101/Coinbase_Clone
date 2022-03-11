import './TableRowInputText.css';
import { Text, Input } from '..';

const TableRowInputText = ({
	helperText,
	inputPlaceholder,
	icon,
	iconSize,
}) => {
	return (
		<tr className="TableRowInputText">
			<td>
				<Text color="grey">{helperText}</Text>
			</td>
			<td>
				<div className="tableRowInputText__cellVerticalAligned">
					<div
						className="tableRowInputText__icon"
						style={{ fontSize: iconSize + 'px' }}>
						{icon}
					</div>
					<Input placeholder={inputPlaceholder} />
				</div>
			</td>
			<td></td>
		</tr>
	);
};

export default TableRowInputText;
