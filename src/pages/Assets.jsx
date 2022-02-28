import {
	ContentCenter,
	ContentRight,
	Container,
	Text,
	Table,
} from '../components';

const Assets = () => {
	return (
		<>
			<ContentCenter>
				<Container>
					<Table></Table>
				</Container>
				<Container></Container>
			</ContentCenter>
			<ContentRight>
				<Container>
					<Text h1 size="xxl">
						€4,999.46
					</Text>
					<Text h1>Assets</Text>
					<Text h2>Your assets</Text>
					<Text h3>Assets</Text>
					<Text uppercase>Assets</Text>
				</Container>
			</ContentRight>
		</>
	);
};

export default Assets;
