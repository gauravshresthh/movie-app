import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const ProfileScreen = (props) => (
	<View style={styles.container}>
		<Text style={{ color: 'white' }}>
			Welcome to the Profile Screen
		</Text>
	</View>
);
export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
