import react from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../globalStyle";

const CustomCardBox = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 140,
        marginVertical: 8,
        padding: 20,
        backgroundColor: "#F3F3FC",
        alignItems: 'center', 
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onPress={props.onPress}
    >
      {props.img}
      <Text style={{ textAlign: "center", marginTop: 10 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomCardBox;
