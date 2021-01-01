import React, {
	useEffect,
	useState,
} from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({
	navigation,
}) {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async ()=>{
		await fetch
	}
	useEffect(() => {
		fetchMovies()
	}, []);
	return (
		<View
			style={{
				flex: 1,
				padding: 20,
			}}
		>
			<Text
				style={{
					color: '#E50914',
					margin: 5,
					fontSize: 30,
					marginBottom: 20,
					fontWeight: 'bold',
				}}
			>
				Movies
			</Text>

			<View>
				<TouchableOpacity>
					<Image
						source={{
							uri:
								'https://img.yts.mx/assets/images/movies/summerland_2020/medium-cover.jpg',
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
						Summerland
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
