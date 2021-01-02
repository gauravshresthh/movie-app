import React, {
	useState,
	useEffect,
} from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	Image,
} from 'react-native';

import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

function CastsScreen({ route, navigation }) {
	const { movie_id } = route.params;

	const [casts, setCasts] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchCasts = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}&with_cast=true&with_images=true`
			);
			setCasts(data.data.movie.cast);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCasts();
	}, []);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator
					size='large'
					color='red'
				/>
			</View>
		);
	}

	return (
		<FlatList
			data={casts}
			keyExtractor={(cast) => {
				{
					cast.imdb_code.toString();
				}
			}}
			renderItem={({ item }) => (
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							backgroundColor: 'white',
							width: '70%',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 30,
							borderRadius: 10,
							padding: 20,
						}}
					>
						<Image
							source={{
								uri: `${item.url_small_image}`,
							}}
							style={{
								height: 50,
								width: 50,
								borderRadius: 50,
							}}
						/>
						<Text
							style={{
								color: 'black',
								fontSize: 20,
								textAlign: 'center',
							}}
						>
							Real Name : {item.name}
						</Text>
						<Text
							style={{
								color: 'black',
								fontSize: 20,
							}}
						>
							Character : {item.character_name}
						</Text>
					</View>
				</View>
			)}
		></FlatList>
	);
}
export default CastsScreen;
