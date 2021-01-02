import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
} from 'react-native';

export default function DetailsScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Image
				style={{ height: '40%', width: '100%' }}
				source={{
					uri:
						'https://img.yts.mx/assets/images/movies/the_fat_and_the_lean_1961/large-cover.jpg',
				}}
			/>
			<Text>Wonder Woman</Text>
		</View>
	);
}
