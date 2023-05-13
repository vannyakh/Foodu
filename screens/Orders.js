import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
  RefreshControl,
} from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedResturants } from "../api";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { selectResturant } from "../slices/resturantSlice";
import CartOrder from "../components/cartOrder";
import Completedorder from "../components/CompletedOrder";
import Cancelledorder from "../components/CancelledOrder";
import Empty from "../components/Empty";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Imagepiza from "../assets/images/pizzaDish.png";
import Imagepiza2 from "../assets/images/pizzaDish2.png";
import Imagepiza3 from "../assets/images/pizzaDish3.png";
function Orders() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const basketItems = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("active");
  const [order, setOrder] = useState([
    {
      id: "1",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza,
      distance: "2",
      status: "Active",
    },
    {
      id: "2",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza2,
      distance: "2",
      status: "Completed",
    },
    {
      id: "3",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Cancelled",
    },
    {
      id: "4",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Cancelled",
    },
    {
      id: "5",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Cancelled",
    },
    {
      id: "6",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Cancelled",
    },
    {
      id: "7",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Completed",
    },
    {
      id: "8",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Cancelled",
    },
    {
      id: "9",
      name: "Order 1",
      items: ["Item 1", "Item 2"],
      price: "10",
      image: Imagepiza3,
      distance: "2",
      status: "Completed",
    },
  ]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const activeOrders = order.filter((o) => o.status === "Active");
  const completedOrders = order.filter((o) => o.status === "Completed");
  const cancelledOrders = order.filter((o) => o.status === "Cancelled");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    getFeaturedResturants().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  return (
    <SafeAreaView className=" bg-white flex-1 dark:bg-slate-800">
      {/* top button */}
      <View className="flex justify-between items-center flex-row px-4 py-3 bg-white dark:bg-slate-800 shadow-sm">
        <View className="flex justify-center items-center flex-row">
          <Image
            source={require("../assets/icon.png")}
            className="img-fluid h-12 w-12"
          />
          <Text className="text-xl font-bold ml-2 dark:text-white">Orders</Text>
        </View>
        <TouchableOpacity className="absolute z-10 rounded-full p-1 shadow  right-4">
          <Icon.Search strokeWidth={2} stroke="#212121" />
        </TouchableOpacity>
      </View>

      {/* Tab bar */}
      <View style={styles.tabContainer}>
        <TouchableNativeFeedback
          onPress={() => handleTabClick("active")}
        >
        <View
          style={[
            styles.tabItem,
            selectedTab === "active" && styles.activeTabItem,
          ]}
          
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "active" && styles.activeTabText,
            ]}
          >
            Active 
          </Text>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => handleTabClick("completed")}
        >
        <View
          style={[
            styles.tabItem,
            selectedTab === "completed" && styles.activeTabItem,
          ]}
          onPress={() => handleTabClick("completed")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => handleTabClick("cancelled")}
        >
        <View
          style={[
            styles.tabItem,
            selectedTab === "cancelled" && styles.activeTabItem,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "cancelled" && styles.activeTabText,
            ]}
          >
            Cancelled
          </Text>
        </View>
        </TouchableNativeFeedback>
      </View>

      {/* List order */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white pt-5 dark:bg-slate-800 "
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {selectedTab === "active" && (
          activeOrders.length === 0 ? <View className="mt-24" ><Empty/></View> : 
          activeOrders.map((item, index) => (
            <CartOrder
              name={item.name}
              item={item.items.length}
              price={item.price}
              image={item.image}
              distance={item.distance}
              status={item.status}
              key={index}
            />
          ))
        )}
        {selectedTab === "completed" &&
          completedOrders.map((item, index) =>
            completedOrders.length === 0 ? (
              <View className="mt-14" ><Empty /></View>
            ) : (
              <Completedorder
                name={item.name}
                item={item.items.length}
                price={item.price}
                image={item.image}
                distance={item.distance}
                status={item.status}
                key={index}
              />
            )
          )}
        {selectedTab === "cancelled" && (
          cancelledOrders.length === 0 ? <View className="mt-14" ><Empty /></View> :
        
          cancelledOrders.map((item, index) => (
            <Cancelledorder
              name={item.name}
              item={item.items.length}
              price={item.price}
              image={item.image}
              distance={item.distance}
              status={item.status}
              key={index}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    marginHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#EEEEEE",
  },
  tabItem: {
    padding: 16,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#9E9E9E",
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#1BAC4B",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9E9E9E",
  },
  activeTabText: {
    color: "#1BAC4B",
  },
});
