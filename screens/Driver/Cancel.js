import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import * as Icon from "react-native-feather";
import { AntDesign } from "@expo/vector-icons";
import RadioGroup from "react-native-radio-buttons-group";
import { Overlay } from "react-native-elements";
import { View} from "react-native-animatable"

const Cancel = () => {
  const navigation = useNavigation();

  const [reason, setReason] = React.useState("");
  const [othersReason, setOthersReason] = React.useState("");
  const [isOthers, setIsOthers] = React.useState(false);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Waiting for long time",
        value: "Waiting for long time",
      },
      {
        id: "2",
        label: "Unable to contact driver",
        value: "Unable to contact driver",
      },
      {
        id: "3",
        label: "Driver denied to go to destination",
        value: "Driver denied to go to destination",
      },
      {
        id: "4",
        label: "Driver denied to come to pickup",
        value: "Driver denied to come to pickup",
      },
      {
        id: "5",
        label: "Wrong address shown",
        value: "Wrong address shown",
      },
      {
        id: "6",
        label: "The price is not reasonable",
        value: "The price is not reasonable",
      },
      {
        id: "7",
        label: "I want to order another restaurant",
        value: "I want to order another restaurant",
      },
      {
        id: "8",
        label: "I just want to cancel",
        value: "I just want to cancel",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState("");

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
            Cancel Order
          </Text>
        </View>
      </View>
      <ScrollView className="flex-1">
        <View className="flex flex-col flex-1 ">
          <View className="flex flex-col mx-4  pt-2 pb-6 border-b border-gray-200 dark:border-gray-700 ">
            <Text className="font-normal text-lg  text-black dark:text-white">
              Are you sure you want to cancel this order?
            </Text>
          </View>
          <View className="flex flex-col mx-4  pt-2 pb-4  items-start ">
            <RadioGroup
              borderColor={themeColors.bgColor(1)}
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              containerStyle={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            />
          </View>
          <View className="flex flex-col mx-4  pt-2 pb-6 border-b border-gray-200 dark:border-gray-700 ">
            <Text className="font-normal text-lg  text-black dark:text-white">
              Others
            </Text>
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingBottom: 26,
              }}
              onChangeText={(text) => setOthersReason(text)}
              value={othersReason}
              placeholder="Please enter your reason"
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
      </ScrollView>
      <View className="flex flex-row justify-center items-center">
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            width: "90%",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
          onPress={toggleOverlay}
        >
          <Text className="text-white font-bold text-lg">Submit</Text>
        </TouchableOpacity>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} 
        
        
        >
          <View 
            animation={"fadeIn"}
            duration={1000}
            delay={100}
            
            className="w-full p-4 flex items-center justify-center"
          >
          <View
            className="flex flex-col justify-center items-center  "
          >
            <View>
              <Image
                source={require("../../assets/images/sad.png")}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <View>
              <Text style={{color: themeColors.bgColor(1) , fontSize: 20, fontWeight: "bold"}}
              
              >
                Were so sad about your cancellation
              </Text>
              <Text 
              
              className="text-center text-gray-800 text-lg font-normal mt-4 "

              >
                We will continue to improve our service & satisfy you on the
                next order.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              style={{
                backgroundColor: themeColors.bgColor(1),
                width: 250,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop:20,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                OK
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </Overlay>
      </View>
    </SafeAreaView>
  );
};

export default Cancel;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
});
