import './TabContentSelectAsset.css';
import { Text, Search, TabContent, Table, TableCellCoinName } from '..';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import useAssets from '../../hooks/useAssets';

const TabContentSelectAsset = ({
	toggleIsSelectAssetOpen,
	selectedCrypto,
	selectedFiat,
	lastSelectAssetType,
	handleSelectAsset,
	showCheck,
}) => {
	const { allCrypto, allFiat } = useAssets();
	const assets = lastSelectAssetType === 'fiat' ? allFiat : allCrypto;

	return (
		<TabContent>
			<div className="tabContent__titleGrid">
				<FaArrowLeft onClick={toggleIsSelectAssetOpen} />
				<Text h3>Select Asset</Text>
			</div>
			<Search maxWidth={800} />
			<Table hasSmallPadding>
				<tbody>
					{assets.map((asset) => (
						<tr key={asset.symbol} onClick={() => handleSelectAsset(asset)}>
							<td>
								<TableCellCoinName
									icon={asset.icon}
									name={asset.name}
									symbol={asset.symbol}
								/>
							</td>
							<td>
								<div className="tabContent__selectAssetCell">
									<Text>{`€${asset.price_eur.toLocaleString()}`}</Text>
									{showCheck(asset, selectedCrypto, selectedFiat) && (
										<FaCheck />
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</TabContent>
	);
};

export default TabContentSelectAsset;
