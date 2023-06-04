import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Card = () => {
  const [cardNumber, setCardNumber] = React.useState("1234567891234567");
  const hiddenNumber =
    "●●●● ●●●● ●●●● " + cardNumber.substring(cardNumber.length - 4);

  return (
    <View
      className="flex flex-col justify-between items-center relative"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <LinearGradient
        colors={["#1BAC4B", "#46D375"]}
        style={{ padding: 26, borderRadius: 20 }}
        className="w-full"
      >
        <Image
          source={require("../assets/images/l.png")}
          className=" absolute top-0 -left-6"
          style={{
            opacity: 0.5,
            width: 150,
            height: 150,
          }}
        />
        <Image
          source={require("../assets/images/r.png")}
          className=" absolute -top-10 -right-5"
          style={{
            opacity: 0.5,
            width: 150,
            height: 150,
          }}
        />
        <Image
          source={require("../assets/images/mr.png")}
          className="absolute -top-8 right-32"
          style={{
            opacity: 0.5,
            width: 100,
            height: 100,
          }}
        />
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              Andrew Ainsley
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              {hiddenNumber}
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/MyCredit.png")}
              className="h-[26px] w-[104px]"
            />
          </View>
        </View>
        <View className="flex flex-row justify-between items-center mt-8">
          <View className="flex flex-col ">
            {/* your balance */}
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
              Your Balance
            </Text>
            <Text style={{ color: "#fff", fontSize: 34, fontWeight: "bold" }}>
              $9,379
            </Text>
          </View>
          {/* top up */}
          <TouchableOpacity className="flex flex-row items-center mt-4 bg-white p-2 px-5 rounded-full">
            <Entypo name="credit-card" size={22} color="#3F3F3F" />
            <Text
              style={{ color: "#3F3F3F", fontSize: 14, fontWeight: "bold" }}
              className="ml-2"
            >
              Top Up
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
