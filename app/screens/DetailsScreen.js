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
import { LinearGradient } from 'expo-linear-gradient';

import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';
import { set } from 'react-native-reanimated';

export default function DetailsScreen({ route }) {
	let { movieId } = route.params;

	const [movie, setMovie] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://yts.mx/api/v2/movie_details.json/`,
					{
						params: {
							movie_id: movieId,
						},
					}
				);
				const data = await response.data;
				setMovie(data.data.movies);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
			console.log(movie);
		})();
	}, [movieId]);

	return (
		<View>
			<Text style={{ color: 'white' }}>
				Hello world
			</Text>
		</View>
	);
	// if (loading) {
	// 	return (
	// 		<View
	// 			style={{
	// 				flex: 1,
	// 				justifyContent: 'center',
	// 				alignItems: 'center',
	// 			}}
	// 		>
	// 			<ActivityIndicator
	// 				size='large'
	// 				color='#00ff00'
	// 			/>
	// 		</View>
	// 	);
	// }
	// return (
	// 	<View style={{ flex: 1 }}>
	// 		<LinearGradient
	// 			// Background Linear Gradient
	// 			colors={[
	// 				'rgba(0,0,0,0.8)',
	// 				'transparent',
	// 			]}
	// 			style={{
	// 				position: 'absolute',
	// 				left: 0,
	// 				right: 0,
	// 				top: 0,
	// 				height: 300,
	// 			}}
	// 		/>
	// 		<Image
	// 			style={{ height: '40%', width: '100%' }}
	// 			resizeMode='cover'
	// 			source={{
	// 				uri:
	// 					'https://img.yts.mx/assets/images/movies/nurse_3d_2013/medium-cover.jpg',
	// 			}}
	// 		/>

	// 		<Text
	// 			style={{
	// 				color: 'red',

	// 				fontWeight: 'bold',
	// 				textAlign: 'center',

	// 				fontSize: 30,
	// 			}}
	// 		>
	// 			{movie.title}
	// 		</Text>

	// 		<View
	// 			style={{
	// 				flexDirection: 'row',
	// 				justifyContent: 'center',
	// 				alignItems: 'center',
	// 			}}
	// 		>
	// 			<Text style={{ color: 'gray' }}>
	// 				`${movie.year} ${movie.genres} $
	// 				{movie.language}`
	// 			</Text>
	// 		</View>

	// 		<View
	// 			style={{
	// 				width: '50%',
	// 				justifyContent: 'center',
	// 				left: '25%',
	// 			}}
	// 		>
	// 			<StarRating
	// 				disabled
	// 				maxStars={5}
	// 				rating={5}
	// 				emptyStarColor='white'
	// 				fullStarColor='yellow'
	// 				starSize={20}
	// 			/>
	// 		</View>
	// 		<Text
	// 			style={{
	// 				color: 'gray',
	// 				margin: 20,
	// 				marginBottom: 40,
	// 			}}
	// 		>
	// 			The film's title was inspired by the
	// 			popular maxim \"Less is more,\"
	// 			popularized by architect Ludwig Mies van
	// 			der Rohe (1886-1969), who used this
	// 			aphorism to describe his design aesthetic;
	// 			his tactic was one of arranging the
	// 			necessary components of a building to
	// 			create an impression of extreme
	// 			simplicity. The Minimalists have reworked
	// 			this phrase to create a sense of urgency
	// 			for today's consumer culture: now is the
	// 			time for less.
	// 		</Text>

	// 		<Button
	// 			title='Watch Now'
	// 			color='red'
	// 			onPress={() => {
	// 				alert(
	// 					'this feature will be added soon'
	// 				);
	// 			}}
	// 		></Button>
	// 	</View>
	// );
}
