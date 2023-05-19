import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from './components/BottomNavigation';
import Search from './screens/Search';
import Filter from './screens/Filter';
import ResturantScreen from './screens/ResturantScreen';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import Orders from './screens/Orders';
import About from './screens/About';
import Address from './screens/Address';
import Notification from './screens/Notification';
import Myprofile from './screens/Myprofile';
import Language from './screens/Language';
import Discount from './screens/Discount';
import Payment from './screens/Payment';
import Friend from './screens/InviteFriends';
import Map from './screens/Map';
import Auth from './screens/auth/Auths';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import Forgotpassword from './screens/auth/Forgotpassword';
import Otp from './screens/auth/OTP';
import Welcome from './screens/welcome/WelcomTo';
import userAuth from './hooks/userAuth';
import AllCaregory from './screens/AllCaregory';
import Email_signup from './screens/auth/Email_signup';
import Email_login from './screens/auth/Email_login';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {

  const { user } = userAuth();

  // if(user){
  //   return (
  //     <NavigationContainer>
  //         <Stack.Navigator initialRouteName='Home'
  //             screenOptions={{
  //                 headerShown: false
  //             }} >
  //               <Stack.Screen name="Home" component={BottomNavigation} />
  //              <Stack.Screen name="Resturant" component={ResturantScreen} />
  //              <Stack.Screen name="Search"  component={Search} />
  //              <Stack.Screen name="Filter" component={Filter} />
  //              <Stack.Screen name="Cart" options={{ presentation: 'modal', headerShown: false }} component={CartScreen} />
  //              <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen} />
  //              <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
  //              <Stack.Screen name="Orders" options={{ headerShown: false }} component={Orders} />
  //              <Stack.Screen name="About" options={{ headerShown: true }} component={About} />
  //              <Stack.Screen name="Address" options={{ headerShown: true }} component={Address} />
  //              <Stack.Screen name="Notification" options={{ headerShown: false }} component={Notification} />
  //              <Stack.Screen name="Myprofile" options={{ headerShown: true }} component={Myprofile} />
  //              <Stack.Screen name="Language" options={{ headerShown: true }} component={Language} />
  //              <Stack.Screen name="Discount" options={{ headerShown: true }} component={Discount} />
  //              <Stack.Screen name="Payment" options={{ headerShown: true }} component={Payment} />
  //              <Stack.Screen name="Friend" options={{ headerShown: true }} component={Friend} />
  //              <Stack.Screen name="Map" options={{ headerShown: false }}  component={Map} />

  //     </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }else{

  //   return (
  //     <NavigationContainer>
  //         <Stack.Navigator initialRouteName='Welcome'
  //             screenOptions={{
  //                 headerShown: false
  //             }} >
  //               {/* Welcom */}
  //               <Stack.Screen name="Welcome"  options={{ presentation: 'fullScreenModal', headerShown: false }}  component={Welcome} />
  //             {/* Auth */}
  //              <Stack.Screen name="Auth" options={{ headerShown: false }} component={Auth} />
  //              <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
  //              <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin} />
  //              <Stack.Screen name="Forgotpassword" options={{ headerShown: false }} component={Forgotpassword} />
  //              <Stack.Screen name="Otp" options={{ headerShown: false }} component={Otp} />

  //              {/* email */}
  //               <Stack.Screen name="Email_signup" options={{ headerShown: false }} component={Email_signup} />
  //               <Stack.Screen name="Email_login" options={{ headerShown: false }} component={Email_login} />
            
  //        </Stack.Navigator>
  //     </NavigationContainer>
  //   );

  // }

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'
            screenOptions={{
                headerShown: false
            }}
        >
            {/* Welcom */}
            <Stack.Screen name="Welcome"  options={{ presentation: 'fullScreenModal', headerShown: false }}  component={Welcome} />
            <Stack.Screen name="AllCaregory"  options={{ presentation: 'fullScreenModal', headerShown: false }}  component={AllCaregory} />
            <Stack.Screen name="HomeScreen" component={BottomNavigation} />
            <Stack.Screen name="Resturant" component={ResturantScreen} />
            <Stack.Screen name="Search"  component={Search} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="Cart" options={{ presentation: 'modal', headerShown: false }} component={CartScreen} />
            <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen} />

            <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
            <Stack.Screen name="Orders" options={{ headerShown: false }} component={Orders} />
            <Stack.Screen name="About" options={{ headerShown: false }} component={About} />
            <Stack.Screen name="Address" options={{ headerShown: false }} component={Address} />
            <Stack.Screen name="Notification" options={{ headerShown: false }} component={Notification} />
            <Stack.Screen name="Myprofile"  component={Myprofile} />
            <Stack.Screen name="Language"  component={Language} />
            <Stack.Screen name="Discount"  component={Discount} />
            <Stack.Screen name="Payment"  component={Payment} />
            <Stack.Screen name="Friend"  component={Friend} />
            <Stack.Screen name="Map" options={{ headerShown: false }}  component={Map} />
            {/* Auth */}
            <Stack.Screen name="Auth" options={{ headerShown: false }} component={Auth} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
            <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin} />
            <Stack.Screen name="Forgotpassword" options={{ headerShown: false }} component={Forgotpassword} />
            <Stack.Screen name="Otp" options={{ headerShown: false }} component={Otp} />

        </Stack.Navigator>      
    </NavigationContainer>
  );
}
export default Navigation;