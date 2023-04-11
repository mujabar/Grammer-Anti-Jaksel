import react, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native';
import CardContent from '../components/card/content';
import { globalStyle } from '../globalStyle';
import axios from 'axios';

export default function Vidio({ navigation }) {
  const [dataVidio, setDataVidio] = useState([
    {
      id: 1,
      url: 'https://youtu.be/B2IldXHBDA0',
      categoryId: 1,
      name: "Tense"
    },
    {
      id: 2,
      url: 'https://youtu.be/HXh0y44f3Hw',
      categoryId: 2,
    },
    {
      id: 3,
      url: 'https://youtu.be/WYqVpdaMQvc',
      categoryId: 3,
    },
    {
      id: 4,
      url: 'https://youtu.be/B2IldXHBDA0',
      categoryId: 1,
    },
    {
      id: 5,
      url: 'https://youtu.be/HXh0y44f3Hw',
      categoryId: 2,
    },
    {
      id: 6,
      url: 'https://youtu.be/WYqVpdaMQvc',
      categoryId: 3,
    },
  ]);


  // const apiVidio = `http://adityae.my.id/v1/youtube`;

  // console.log('coba', dataVidio);
  // useEffect(() => {
  //   getMateri();
  // }, []);

  // const getMateri = () => {
  //   axios
  //     .get(apiVidio)
  //     .then(function (response) {
  //       setDataVidio(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       console.log(response);
  //     });
  // };

  return (
    <SafeAreaView>
      <SafeAreaView style={{ margin: 20, marginTop: 60, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back-black.png')} />
        </TouchableOpacity>
        <Text style={[globalStyle.textTitle, { marginLeft: '34%' }]}>
          Video
        </Text>
      </SafeAreaView>
      <ScrollView>
        {dataVidio?.map((data) => (
          <CardContent
          click={() => Linking.openURL(data.url)}
          title={data.name}
           image={
            <Image
              style={styles.cardImage}
              source={require("../assets/tense.png")}
            />
          } />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
  },
});
