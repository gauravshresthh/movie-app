import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
	Button,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetailsScreen({ route }) {
	const { itemId, item } = route.params;
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				// Background Linear Gradient
				colors={[
					'rgba(0,0,0,0.8)',
					'transparent',
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
					uri: `${item.medium_cover_image}`,
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
				{item.title}
			</Text>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'gray' }}>
					`${item.year} ${item.genres} $
					{item.language}`
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
				The film's title was inspired by the
				popular maxim \"Less is more,\"
				popularized by architect Ludwig Mies van
				der Rohe (1886-1969), who used this
				aphorism to describe his design aesthetic;
				his tactic was one of arranging the
				necessary components of a building to
				create an impression of extreme
				simplicity. The Minimalists have reworked
				this phrase to create a sense of urgency
				for today's consumer culture: now is the
				time for less.
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
