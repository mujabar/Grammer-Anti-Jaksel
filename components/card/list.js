import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CardList(props){
  return (
    <TouchableOpacity 
    onPress={props.click}
    >
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F3F3FC",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
