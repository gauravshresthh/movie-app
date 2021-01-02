import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StarRating from 'react-native-star-rating';

export default function DetailsScreen() {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				// Background Linear Gradient
				colors={[
					'transparent',
					'rgba(0,0,0,0.8)',
				]}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: 300,
				}}
			/>
			<Image
				style={{ height: '40%', width: '100%' }}
				resizeMode='cover'
				source={{
					uri:
						'https://img.yts.mx/assets/images/movies/the_fat_and_the_lean_1961/large-cover.jpg',
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
				Wonder Woman
			</Text>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'gray' }}>
					2020 Adventure,Action Language : EN
				</Text>
			</View>

			<StarRating
				disabled
				maxStars={10}
				rating={item.rating}
			/>
			<Text>{item.summary}</Text>
		</View>
	);
}
