import React, {
	useState,
	useEffect,
} from 'react';
import {
	Text,
	View,
	Image,
	Button,
	ActivityIndicator,
} from 'react-native';

import StarRating from 'react-native-star-rating';

import axios from 'axios';

export default function DetailsScreen({
	route,
	navigation,
}) {
	const { movie_id } = route.params;

	const [movie, setMovie] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchMovie = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`
			);
			setMovie(data.data.movie);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMovie();
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
		<View style={{ flex: 1 }}>
			<Image
				style={{ height: '40%', width: '100%' }}
				resizeMode='contain'
				source={{
					uri: `${movie.medium_cover_image}`,
				}}
			/>

			<Text
				style={{
					color: 'white',

					fontWeight: 'bold',
					textAlign: 'center',

					fontSize: 30,
				}}
			>
				{movie.title}
			</Text>

			<View
				style={{
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 20,
				}}
			>
				<Text style={{ color: 'gray' }}>
					Year : {movie.year}
				</Text>
				<Text style={{ color: 'gray' }}>
					Genre : {movie.genres}
				</Text>
				<Text style={{ color: 'gray' }}>
					Language : {movie.language}
				</Text>
			</View>

			<View
				style={{
					width: '50%',
					justifyContent: 'center',
					left: '25%',
				}}
			>
				<StarRating
					disabled
					maxStars={10}
					rating={movie.rating}
					emptyStarColor='white'
					fullStarColor='yellow'
					starSize={20}
				/>
			</View>
			<Text
				style={{
					color: 'gray',
					margin: 20,
					marginBottom: 40,
				}}
			>
				{movie.description_full}
			</Text>

			<Button
				title='Watch Now'
				color='red'
				onPress={() => {
					alert(
						'This feature will be added soon'
					);
				}}
			></Button>
			<View style={{ marginTop: 10 }}>
				<Button
					title='Details about the cast and crew'
					color='#b31240'
					onPress={() => {
						navigation.navigate('Casts', {
							movie_id: movie_id,
						});
					}}
				></Button>
			</View>
		</View>
	);
}
