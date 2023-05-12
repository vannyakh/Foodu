import React from "react";
import { Text, Image ,StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import Emptys from "../assets/images/Empty.png";
import { themeColors } from "../theme";
function Empty() {
  return (
    <View
      animation="fadeIn"
      duration={500}
      className="flex-1 justify-center items-center h-full"
    >
      <Image
        source={Emptys}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "medium",
          color: "#000",
          textAlign: "center",
          marginBottom: 10,
          textTransform: "capitalize",
        }}
      >
        No item orders
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Please Order</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Empty;

const styles = StyleSheet.create({
    button: {
      backgroundColor: themeColors.bgColor(1),
      borderRadius: 8,
      padding: 10,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'medium',
    },
  });