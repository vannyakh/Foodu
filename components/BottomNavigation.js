import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator, HeaderBackButton } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Message from '../screens/Message';
import { themeColors } from '../theme';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNavigation(){
    return(
        <Tab.Navigator
            screenOptions={

                ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                }
                else if (route.name === 'Cart') {
                    iconName = focused
                    ? 'cart'
                    : 'cart-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused
                    ? 'person'
                    : 'person-outline';
                }
                else if (route.name === 'Orders') {
                    iconName = focused
                    ? 'receipt'
                    : 'receipt-outline';
                }
                else if (route.name === 'Message') {
                    iconName = focused
                    ? 'chatbox'
                    : 'chatbox-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: themeColors.bgColor(1),
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    // backgroundColor: themeColors.bgColor(1),
                    borderTopWidth: 1,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 10,
                },
                // tabBarInactiveTintColor: themeColors.bgColor(1),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}



export default BottomNavigation;

