import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./resturantCard";
import { getFeaturedResturantById } from "../api";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function FeatureRow({ id, title, description, resturants }) {
  // const [resturants, setResturants] = useState([]);

  useEffect(() => {
    // getFeaturedResturantById(id).then(data=>{
    //   // console.log('got data: ',data);
    //   setResturants(data?.resturants);
    // })
  }, [id]);
  // console.log(resturants);

  return (
    <View>
      <View className="flex-row justify-between flex items-center px-4">
        <View>
          <Text className="font-bold text-lg dark:text-white">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold"
          onPress={() => navigation.navigate("ResturantList", { id }) }
          // onPress={() => navigation.navigate("ResturantList", { id }) }
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          resturants && resturants.map(resturant=>{
            return (
                <ResturantCard
                  key={resturant._id}
                  id={resturant._id}
                  imgUrl={resturant.image}
                  title={resturant.name}
                  rating={resturant.rating}
                  type={resturant.type?.name}
                  address="123 main street"
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={resturant.lng}
                  lat={resturant.lat}

              />    
            )
          })
        }           
       </ScrollView> */}
      {resturants && resturants.length ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          className="overflow-visible py-5"
        >
          {resturants.map((resturant) => {
            return (
              <ResturantCard
                key={resturant._id}
                id={resturant._id}
                imgUrl={resturant.image}
                title={resturant.name}
                rating={resturant.rating}
                type={resturant.type?.name}
                address="ផ្សារសំណង់១២"
                delivery="12"
                distance="1.2"
                description={resturant.description}
                dishes={resturant.dishes}
                lng={resturant.lng}
                lat={resturant.lat}
              />
            );
          })}
        </ScrollView>
      ) : (
        <Text
          style={{ padding: 20 }}
          className="text-center text-gray-500 text-sm"
        >
          No data
        </Text>
      )}
    </View>
  );
}
