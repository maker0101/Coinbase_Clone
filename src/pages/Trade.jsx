import { useState } from 'react';
import { ALL_ASSETS } from '../constants/all-assets';
import {
	ContentCenter,
	ContentRight,
	Section,
	SectionTitle,
	TableAssets,
} from '../components';

const Trade = () => {
	const [allAssets] = useState(ALL_ASSETS);

	return (
		<>
			<ContentCenter>
				<Section>
					<SectionTitle text="All Assets" />
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
