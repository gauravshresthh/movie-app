import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	Image,
} from 'react-native';

import {
	Card,
	ListItem,
	Button,
	Icon,
} from 'react-native-elements';
import {
	NavigationContainer,
	DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './app/screens/HomeScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import CastsScreen from './app/screens/CastsScreen';

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
			<HomeStack.Screen
				name='Casts'
				component={CastsScreen}
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
				name='Profile'
				component={ProfileScreen}
			/>
		</SettingsStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const MyTheme = {
		...DefaultTheme,
		dark: true,
		colors: {
			...DefaultTheme.colors,
			primary: '#ffffff',
			background: '#131313',
			text: '#ffffff',
			card: '#000',
		},
	};
	return (
		<NavigationContainer theme={MyTheme}>
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
					activeTintColor: 'white',
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
