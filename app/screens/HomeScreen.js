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
import {
	ScrollView,
	TouchableOpacity,
} from 'react-native-gesture-handler';

import axios from 'axios';

export default function HomeScreen({
	navigation,
}) {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			const { data } = await axios.get(
				'https://yts.mx/api/v2/list_movies.json'
			);
			setMovies(data.data.movies);
		} catch (error) {
			console.log(error);
		}
	};

	const [
		topRatedMovies,
		setTopRatedMovies,
	] = useState([]);

	const fetchTopRatedMovies = async () => {
		try {
			const { data } = await axios.get(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=9'
			);
			setTopRatedMovies(data.data.movies);
		} catch (err) {
			console.log(err);
		}
	};

	const [
		threeDMovies,
		setThreeDMovies,
	] = useState([]);

	const fetchThreeDMovies = async () => {
		try {
			const { data } = await axios.get(
				'https://yts.mx/api/v2/list_movies.json?quality=3D'
			);
			setThreeDMovies(data.data.movies);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchMovies();
		fetchTopRatedMovies();
		fetchThreeDMovies();
	}, []);

	return (
		<ScrollView>
			<Text
				style={{
					color: '#E50914',
					marginTop: 40,
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
				keyExtractor={(movie) =>
					movie.id.toString()
				}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							padding: 20,
						}}
					>
						<View style={{ width: 150 }}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Details', {
										movie_id: item.id,
									})
								}
							>
								<Image
									source={{
										uri: `${item.medium_cover_image}`,
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
										fontSize: 18,
									}}
								>
									{item.title}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			/>

			<Text
				style={{
					color: '#E50914',
					marginTop: 40,
					fontSize: 30,
					marginBottom: 20,
					marginLeft: 20,
					fontWeight: 'bold',
				}}
			>
				Top Rated Movies
			</Text>
			<FlatList
				data={topRatedMovies}
				horizontal
				keyExtractor={(movie) =>
					movie.id.toString()
				}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							padding: 20,
						}}
					>
						<View style={{ width: 150 }}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Details', {
										movie_id: item.id,
									})
								}
							>
								<Image
									source={{
										uri: `${item.medium_cover_image}`,
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
										fontSize: 18,
									}}
								>
									{item.title}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			/>

			<Text
				style={{
					color: '#E50914',
					marginTop: 40,
					fontSize: 30,
					marginBottom: 20,
					marginLeft: 20,
					fontWeight: 'bold',
				}}
			>
				3D Movies
			</Text>
			<FlatList
				data={threeDMovies}
				horizontal
				keyExtractor={(movie) =>
					movie.id.toString()
				}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							padding: 20,
						}}
					>
						<View style={{ width: 150 }}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Details', {
										movie_id: item.id,
									})
								}
							>
								<Image
									source={{
										uri: `${item.medium_cover_image}`,
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
										fontSize: 18,
									}}
								>
									{item.title}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			/>
		</ScrollView>
	);
}
