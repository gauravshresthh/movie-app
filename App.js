import * as React from 'react';
import {
	Button,
	Text,
	View,
	StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
function DetailsScreen() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Details!</Text>
		</View>
	);
}

function HomeScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Home screen</Text>
			<Button
				title='Go to Details'
				onPress={() =>
					navigation.navigate('Details')
				}
			/>
		</View>
	);
}

function SettingsScreen({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Settings screen</Text>
			<Button
				title='Go to Details'
				onPress={() =>
					navigation.navigate('Details')
				}
			/>
		</View>
	);
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<HomeStack.Screen
				name='Home'
				component={HomeScreen}
			/>
			<HomeStack.Screen
				name='Details'
				component={DetailsScreen}
			/>
		</HomeStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<SettingsStack.Screen
				name='Settings'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen
				name='Details'
				component={DetailsScreen}
			/>
		</SettingsStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar hidden />
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({
						focused,
						color,
						size,
					}) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused
								? 'home'
								: 'ios-information-circle-outline';
						} else if (
							route.name === 'Settings'
						) {
							iconName = focused
								? 'ios-list-box'
								: 'ios-list';
						}

						// You can return any component that you like here!
						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>
				<Tab.Screen
					name='Home'
					component={HomeStackScreen}
				/>
				<Tab.Screen
					name='Settings'
					component={SettingsStackScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
