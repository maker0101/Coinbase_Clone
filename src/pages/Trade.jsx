import './Trade.css';
import { useState } from 'react';
import { ALL_ASSETS } from '../constants/all-assets';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableAssets,
	Search,
	Dropdown,
} from '../components';
import { OPTIONS_TIME } from '../constants/options-time';
import { ASSET_TYPE } from '../constants/asset-type';

const Trade = () => {
	const [allAssets] = useState(ALL_ASSETS);

	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle text="All Assets" noBorderBottom />
					<div className="trade__searchFilterRow">
						<Search />
						<div className='trade__filters'>
							<Dropdown name="timeframe" options={OPTIONS_TIME} />
							<Dropdown name="assetType" options={ASSET_TYPE} />
						</div>
					</div>
					<TableAssets assets={allAssets} />
				</Section>
			</ContentCenter>
			<ContentRight>
				<Section></Section>
			</ContentRight>
		</>
	);
};

export default Trade;
