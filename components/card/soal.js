import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CardSoal(props){
  return(
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.no}><Text style={{color: 'white'}}>{props.nomer}</Text></View>
        <View style={styles.soal}><Text>{props.soal}</Text></View>
      </View>
    </TouchableOpacity>
  )
}

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
  no: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: '#19224C'
  },
  soal: {
    fontWeight: '500',
    fontSize: 14,
    color: '#19224C',
    marginLeft: 8,
    textAlign: 'justify',
    maxWidth: 240
  }
});