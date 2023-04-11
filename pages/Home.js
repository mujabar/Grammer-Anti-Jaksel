import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { globalStyle } from '../globalStyle';
import CardContent from '../components/card/content';

const Home = ({ navigation}) => {
  return (
    <SafeAreaView style={globalStyle.containerPage}>
      <View style={globalStyle.containerNav}>
        <Text style={globalStyle.textNav}>
          Learn English grammar easily here
        </Text>
        <Image source={require('../assets/Frameinfo.png')} />
      </View>
      <View style={globalStyle.containerContent}>
        <CardContent
          title="Tense"
          deskripsi="Learn various types of tenses in English"
          click={() => navigation.navigate('Materi', {categoryId: 1})}
          image={
            <Image
              style={styles.cardImage}
              source={require("../assets/tense.png")}
            />
          }
        />
        <CardContent
          title="Preposition"
          deskripsi="Learn various types of tenses in English"
          click={() => navigation.navigate('Materi', {categoryId: 2})}
          image={
            <Image
              style={styles.cardImage}
              source={require("../assets/preposition.png")}
            />
          }
        />
        <CardContent
          title="Conjuction"
          deskripsi="Learn various types of tenses in English"
          click={() => navigation.navigate('Materi', {categoryId: 3})}
          image={
            <Image
              style={styles.cardImage}
              source={require("../assets/conjuction.png")}
            />
          }
        />
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },
});


export default Home;
