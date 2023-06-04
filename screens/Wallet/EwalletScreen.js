import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    Button,
    Alert,
    Platform,
    PermissionsAndroid,
    Dimensions,
    TextInput,
    ScrollView,
    FlatList,
    StatusBar,
    ImageBackground,
    Modal,
    Pressable,
    RefreshControl
     } from 'react-native'
import React from 'react'
import { themeColors } from '../../theme';
import { Feather } from '@expo/vector-icons';
import * as Icon from "react-native-feather";
import Card from '../../components/Card';


const EwalletScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} 
      className="bg-white dark:bg-gray-800 "
    >
        <View className="flex justify-between items-center flex-row px-4 py-3 shadow-sm">
        <View className="flex justify-center items-center flex-row">
          <Image
            source={require("../../assets/icon.png")}
            className="img-fluid h-12 w-12 "
          />
          <Text className="text-xl font-bold ml-2 dark:text-white">E-Wallet</Text>
        </View>
        <View className="relative flex justify-between items-center flex-row gap-2">
          <TouchableOpacity className="rounded-full p-1 shadow ">
            <Icon.Search strokeWidth={2} stroke="#212121" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full  shadow ">
            <Image
              source={require("../../assets/images/MoreCircle.png")}
              className="h-7 w-7"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        className="bg-white dark:bg-gray-800"
        >
        <View className="flex flex-col px-4 py-3">
            <Card />
        <View
          className="flex flex-row justify-between items-center mt-4"
        >
          
            <Text 
              style={{  fontSize: 20, fontWeight: "bold" }}
              className="dark:text-white"
            >
            Transaction History
            </Text>
            <Text
              style={{ color: themeColors.bgColor(1), fontSize: 14, fontWeight: "bold" }}
            >
              See all
            </Text>
          </View>
          <View>
            <View
              className="flex flex-col justify-center items-center mt-14"
            >
              <Image
                source={require("../../assets/images/found.png")}
                className="h-28 w-28"
              />
              <Text
                style={{ color: "#A4A4A4", fontSize: 14, }}
              >
                No transaction history
              </Text>
            </View>
          </View>
        </View>
        
        </ScrollView>
    </SafeAreaView>
  )
}

export default EwalletScreen