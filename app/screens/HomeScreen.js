import React, {
	useEffect,
	useState,
} from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
	FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';

export default function HomeScreen({
	navigation,
}) {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			const response = await axios.get(
				'https://yts.mx/api/v2/list_movies.json'
			);
			setMovies(response.data.data.movies);
			console.log(movies[0]);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<>
			<Text
				style={{
					color: '#E50914',
					marginTop: 20,
					fontSize: 30,
					marginBottom: 20,
					marginLeft: 20,
					fontWeight: 'bold',
				}}
			>
				Movies
			</Text>
			<FlatList
				data={movies}
				horizontal
				keyExtractor={(item) =>
					item.id.toString()
				}
				renderItem={(movie) => (
					<View
						style={{
							flex: 1,
							padding: 20,
						}}
					>
						<View>
							<TouchableOpacity>
								<Image
									source={{
										uri: `${movie.medium_cover_image}`,
									}}
									style={{
										height: 250,
										width: 150,
										borderRadius: 10,
									}}
								/>

								<Text
									style={{
										color: 'white',
										fontWeight: 'bold',
										fontSize: 18,
									}}
								>
									{movie.title}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			/>
		</>
	);
}
