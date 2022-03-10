import {
	TabContent,
	Button,
	InputAmountContainer,
	TableInputBuy,
	TabFooter,
	TabContentSelectAsset,
} from '..';

const TabContentBuy = (props) => {
	return (
		<>
			{props.isSelectAssetOpen ? (
				<TabContentSelectAsset {...props} />
			) : (
				<TabContent>
					<InputAmountContainer />
					<TableInputBuy {...props} />
					<Button size="xl">Buy</Button>
					<TabFooter textLeft="EUR balance" textRight="€2.500,00" />
				</TabContent>
			)}
		</>
	);
};

export default TabContentBuy;
