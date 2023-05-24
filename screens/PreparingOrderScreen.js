import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ImageBackground,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponder,
  TouchableNativeFeedback,
  TouchableOpacity,
  Alert,

} from "react-native";

import React, { useEffect, useMemo, useState, useRef } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const lockWidth = width * 0.75;
const lockHeight = 65;
const smallgap = 4;
const finalPosition = lockWidth - lockHeight;

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const translateBtn = pan.x.interpolate({
    inputRange: [0, finalPosition],
    outputRange: [0, finalPosition],
    extrapolate: "clamp",
  });
  const textOpacity = pan.x.interpolate({
    inputRange: [0, lockWidth / 2],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const translateText = pan.x.interpolate({
    inputRange: [0, lockWidth / 2],
    outputRange: [0, lockWidth / 4],
    extrapolate: "clamp",
  });
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (g.vx > 2 || g.dx > lockWidth / 2) {
          unlock();
        } else {
          reset();
        }
      },
      onPanResponderTerminate: () => reset(),
    })
  ).current;
  const reset = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  const unlock = () => {
    Animated.spring(pan, {
      toValue: { x: finalPosition, y: 0 },
      useNativeDriver: true,
      bounciness: 0,
    }).start();
    setTimeout(() => {
     
      Alert.alert(
        "Unlocked",
        "You can now remove this lock and display your View! Completely your logic!",
        [
            { text: "No", onPress: () => reset() },
            { text: "Yes", onPress: () => navigation.navigate('Cart')}
        ]
    );
    }, 300);
  };

  return (
    // <View className="flex-1 bg-white justify-center items-center">
    //   <StatusBar
    //     barStyle="dark-content"
    //     backgroundColor={'white'}
    //   />
    //   <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
    // </View>
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={"transparent"} />
      <View>
        <ImageBackground
          source={require("../assets/images/maps.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <LinearGradient
        colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
        className="absolute top-0 left-0 right-0 bottom-0 flex-1 flex items-center w-full h-full"
      >
        <View className="flex flex-col items-center justify-center mt-20">
          <Image
            source={require("../assets/images/Logo_Fd.png")}
            className="h-[100px] w-[100px]"
          />
          <Text className="text-2xl font-bold text-center mt-4">
            Your order is on the way
          </Text>
          <Text className="text-center text-gray-500 mt-2">
            Your order is on the way
          </Text>
        </View>
        <View className="flex flex-col items-center justify-center mt-20">
          <Image
            source={require("../assets/images/Center.png")}
            className="h-[250px] w-[250px]"
          />
        </View>
        <View style={styles.lockContainer} className="absolute bottom-10">
          <Animated.Text
            style={[
              styles.txt,
              {
                opacity: textOpacity,
                transform: [{ translateX: translateText }],
              },
            ]}
          >
            {">> Slide to Cancel "}
          </Animated.Text>
          <Animated.View
            style={[styles.bar, { transform: [{ translateX: translateBtn }] }]}
            {...panResponder.panHandlers}
          >
            <AntDesign name="close" size={24} color="white" />
          </Animated.View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  lockContainer: {
    height: lockHeight,
    width: lockWidth,
    borderRadius: lockHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
  },
  txt: {
    color: "#616161",
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  bar: {
    position: "absolute",
    height: lockHeight - smallgap * 2,
    width: lockHeight - smallgap * 2,
    backgroundColor: themeColors.bgColor(1),
    borderRadius: lockHeight,
    left: smallgap,
    alignItems: "center",
    elevation: 1,
    justifyContent: "center",
  },
});
