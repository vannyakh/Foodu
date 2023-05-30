import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { themeColors } from "../theme";
import React, { useState } from "react";

const Filslist = () => {
  const [selectedId, setSelectedId] = useState(1); // Set the initial selected item ID
  const handleItemPress = (id) => {
    setSelectedId(id);
    // Perform any other logic or actions when an item is selected
  };

  const File = [
    { id: 1, name: "All" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Burger" },
    { id: 4, name: "Pasta" },
    { id: 5, name: "Dessert" },
    { id: 6, name: "Drinks" },
    { id: 7, name: "Salad" },
    { id: 8, name: "Sushi" },
    { id: 9, name: "Rice" },
    { id: 10, name: "Noodles" },
    { id: 11, name: "Soup" },
    { id: 12, name: "Sandwich" },
    { id: 13, name: "Breakfast" },
    { id: 14, name: "Lunch" },
    { id: 15, name: "Dinner" },
    { id: 16, name: "Snacks" },
    { id: 17, name: "Seafood" },
    { id: 18, name: "Chicken" },
    { id: 19, name: "Beef" },
    { id: 20, name: "Pork" },
    { id: 21, name: "Vegetarian" },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {File.map((item) => (
          <View
            key={item.id}
            style={[
              styles.item,
              selectedId === item.id && styles.itemSelected, // Apply the selected item style
            ]}
          >
            <Text
              style={[
                styles.itemText,
                selectedId === item.id && styles.itemTextSelected, // Apply the selected item text style
              ]}
              onPress={() => handleItemPress(item.id)}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filslist;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: themeColors.bgColor(0.3),
    
  },
  itemSelected: {
    backgroundColor: themeColors.bgColor(0.3),
    borderColor: themeColors.bgColor(0.5),
  },
  itemText: {
    fontSize: 16,
    fontWeight: "medium",
    color: themeColors.bgColor(1),
  },
  itemTextSelected: {
    color: themeColors.bgColor(1),
    
  },
});
