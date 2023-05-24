import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  Alert,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";

const { width } = Dimensions.get("window");
const lockWidth = width * 0.75;
const lockHeight = 60;
const smallgap = 4;
const finalPosition = lockWidth - lockHeight;

export default function About() {
  const navigation = useNavigation();

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
        [{ text: "COOL", onPress: () => reset() }]
      );
    }, 300);
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-800">
      {/* top button */}
      <View className="relative py-4 shadow-sm flex items-center flex-row justify-center">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow  left-2"
        >
          <Icon.ArrowLeft strokeWidth={2} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl text-black dark:text-white">
            About
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        <View style={styles.lockContainer}>
          <Animated.Text
            style={[
              styles.txt,
              {
                opacity: textOpacity,
                transform: [{ translateX: translateText }],
              },
            ]}
          >
            {"Slide to unlock ->"}
          </Animated.Text>
          <Animated.View
            style={[styles.bar, { transform: [{ translateX: translateBtn }] }]}
            {...panResponder.panHandlers}
          />
        </View>
        <View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  txt: {
    color: "#fff",
    letterSpacing: 2,
  },
  bar: {
    position: "absolute",
    height: lockHeight - smallgap * 2,
    width: lockHeight - smallgap * 2,
    backgroundColor: "#fff",
    borderRadius: lockHeight,
    left: smallgap,
    elevation: 1,
  },
});
