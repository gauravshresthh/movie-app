import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function DetailsScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Image
				style={{ height: '40%', width: '100%' }}
				resizeMode='cover'
				source={{
					uri:
						'https://img.yts.mx/assets/images/movies/the_fat_and_the_lean_1961/large-cover.jpg',
				}}
			/>
			<View
				style={{
					flex: 1,
					position: 'absolute',
					backgroundColor: 'black',
					width: '100%',
					height: '30%',
					opacity: 0.7,
				}}
			></View>
			<Text
				style={{
					color: 'red',
					bottom: 30,
					fontWeight: 'bold',
					textAlign: 'center',
					shadowColor: '#000',
					fontSize: 30,

					shadowOpacity: 0.58,
					shadowRadius: 16.0,

					elevation: 24,
				}}
			>
				Wonder Woman
			</Text>
		</View>
	);
}
