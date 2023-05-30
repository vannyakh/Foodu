import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useMemo, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { selectResturant } from "../slices/resturantSlice";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const lockWidth = width * 0.75;
const lockHeight = 65;
const smallgap = 4;
const finalPosition = lockWidth - lockHeight;

export default function BasketScreen() {
  const resturant = useSelector(selectResturant);
  const [groupedItems, setGroupedItems] = useState([]);
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deliveryFee = 2;
  useMemo(() => {
    const gItems = basketItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(gItems);
    // console.log('items: ',gItems);
  }, [basketItems]);

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
    }).start(() => {
      GotoPreparingOrder();
    });
  };
  const GotoPreparingOrder = () => navigation.navigate("PreparingOrder");

  return (
    <View className=" bg-white flex-1">
      {/* top button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          onPress={navigation.goBack}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Checkout Orders</Text>
          <Text className="text-center text-gray-500">{resturant.title}</Text>
        </View>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white "
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center mb-4"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        {/* <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text> */}
        <View 
          className="flex-1 pl-4 overflow-elipsis"
        >
          <Text
            style={{ color: themeColors.text }}
            className="font-bold text-lg"
            numberOfLines={1}

          >
            Home
          </Text>
          <Text
            className="text-gray-500"
            numberOfLines={1}
          >
            1234 Street, City, State, Country
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={{ color: themeColors.text }} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>

        {Object.entries(groupedItems).map(([key, items]) => {
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text style={{ color: themeColors.text }} className="font-bold">
                {items.length} x{" "}
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {items[0]?.name}
              </Text>
              <Text className="font-semibold text-base">
                ${items[0]?.price}
              </Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className=" p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${basketTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">${basketTotal + deliveryFee}</Text>
        </View>
        <View className="flex-col  border-y border-[#23b45459] py-2">
          {/* Payment methods */}
          <TouchableOpacity 
            onPress={() => navigation.navigate("Payment")}
            className="flex-row justify-between items-center py-2"
          >
            <View
              className="flex-row items-center space-x-3"
            >
            <Image source={require("../assets/images/methods.png")}
              className="w-7 h-7 "
            />
            <Text className="text-gray-500">Payment methods</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          {/* Get discounts */}
          <TouchableOpacity 
            onPress={() => navigation.navigate("Discount")}
            className="flex-row justify-between items-center py-2"
          >
            <View 
              className="flex-row items-center space-x-3"
            >
            <Image source={require("../assets/images/Getdiscounts.png")} 
              className="w-7 h-7 "
            />
            <Text className="text-gray-500">Get discounts</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row flex justify-center items-center rounded-3xl shadow-md">
          <TouchableOpacity 
                style={{backgroundColor: themeColors.bgColor(1)}} 
                onPress={()=> navigation.navigate('PreparingOrder')} 
                className="p-3 rounded-full flex flex-1">
                    <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
          {/* <TouchableOpacity style={styles.lockContainer} 
          onPress={()=> navigation.navigate('PreparingOrder')} 
          >
            <Animated.Text
              style={[
                styles.txt,
                {
                  opacity: textOpacity,
                  transform: [{ translateX: translateText }],
                },
              ]}
            >
              {"$"}
              {basketTotal + deliveryFee} {"Place Order"}
            </Animated.Text>
            <Animated.View
              style={[
                styles.bar,
                { transform: [{ translateX: translateBtn }] },
              ]}
              {...panResponder.panHandlers}
            >
              <Image
                source={require("../assets/images/bikeGuy.png")}
                className="w-14 h-14 rounded-full "
              />
            </Animated.View>
          </TouchableOpacity> */}
        </View>
      </View>
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
    backgroundColor: themeColors.bgColor(1),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  txt: {
    color: "#fff",
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  bar: {
    position: "absolute",
    height: lockHeight - smallgap * 2,
    width: lockHeight - smallgap * 2,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: lockHeight,
    left: smallgap,
    alignItems: "center",
    justifyContent: "center",
  },
});
