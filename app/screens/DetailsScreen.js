import React, {
	useState,
	useEffect,
} from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
	Button,
	ActivityIndicator,
} from 'react-native';

import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';
import { set } from 'react-native-reanimated';

export default function DetailsScreen({ route }) {
	const { movie_id } = route.params;

	const [movie, setMovie] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchMovie = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`
			);
			console.log(data.status);
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
					color='#00ff00'
				/>
			</View>
		);
	}
	return (
		<View style={{ flex: 1 }}>
			<Image
				style={{ height: '40%', width: '100%' }}
				resizeMode='cover'
				source={{
					uri: `${movie.medium_cover_image}`,
				}}
			/>

			<Text
				style={{
					color: 'red',

					fontWeight: 'bold',
					textAlign: 'center',

					fontSize: 30,
				}}
			>
				{movie.title}
			</Text>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'gray' }}>
					{movie.year} {movie.genres}
					{movie.language}
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
					maxStars={5}
					rating={5}
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
						'this feature will be added soon'
					);
				}}
			></Button>
		</View>
	);
}
