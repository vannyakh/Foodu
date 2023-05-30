import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Message from '../screens/Message';
import { themeColors } from '../theme';
import { useColorScheme } from "nativewind";
import EwalletScreen from '../screens/Wallet/EwalletScreen';
const Tab = createBottomTabNavigator();

function BottomNavigation(){
    const { colorScheme, toggleColorScheme } = useColorScheme();
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
                else if (route.name === 'Ewallet') {
                    iconName = focused
                    ? 'wallet'
                    : 'wallet-outline';
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
                    backgroundColor: colorScheme === 'dark' ? '#1E293B' : 'white',
                    borderTopWidth: 1,
                    borderTopColor: colorScheme === 'dark' ? '#808080' : '#F4F4F4',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Ewallet" component={EwalletScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}



export default BottomNavigation;

