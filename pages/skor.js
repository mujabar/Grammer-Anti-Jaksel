import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../globalStyle';
import CardList from "../components/card/content"

const Skor = ({ navigation, route }) => {
  const { total } = route.params;
  console.log(total);
  return (
    <SafeAreaView style={globalStyle.containerPage}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginTop: '40%',
          color: 'white',
        }}>
        {' '}
        SKOR ANDA{' '}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 80,
          marginTop: '20%',
          color: 'white',
        }}>
        {' '}
        {total * 10}{' '}
      </Text>
       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.cardTitle}>Back to home</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
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
    marginTop: 250
  },
  cardTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
});


export default Skor;
