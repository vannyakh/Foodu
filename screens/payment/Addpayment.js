import { StyleSheet, Text, View,ScrollView,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";


const Addpayment = () => {
    const navigation = useNavigation();
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
           Add Payment Methods
          </Text>
        </View>
      </View>
        {/* show payment mod support creditcard aba wing ac */}
        <ScrollView className="flex-1">
        {/* Payment Methods  */}
        
        </ScrollView>
    </SafeAreaView>
  )
}

export default Addpayment

const styles = StyleSheet.create({})