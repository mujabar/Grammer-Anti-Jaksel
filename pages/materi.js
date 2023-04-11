import react, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../globalStyle';
import CustomCardBox from '../components/card/box';
import axios from 'axios';

const Materi = ({ navigation, route }) => {
  const [dataMateri, setDataMateri] = useState([]);
  const { categoryId } = route.params;
  const apiMateri = `https://adityae.my.id/v1/material/category/${categoryId}`;

  console.log(categoryId);
  useEffect(() => {
    getMateri();
  }, []);

  const getMateri = () => {
    axios
      .get(apiMateri)
      .then(function (response) {
        setDataMateri(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(response);
      });
  };

  // const getMateri =  async function logJSONData() {
  //   const response = await fetch("http://adityae.my.id/v1/material/category/1");
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }
  return (
    <SafeAreaView style={globalStyle.containerPage}>
      <View style={{ margin: 20, marginTop: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back.png')} />
        </TouchableOpacity>
        <Image
          style={{ marginLeft: '35%', marginBottom: 60, marginTop: 40 }}
          source={require('../assets/pp.png')}
        />
      </View>
      <SafeAreaView style={globalStyle.containerContent}>
        <Text style={[globalStyle.textTitle, { marginTop: 20 }]}>
          Choose the learning method you want
        </Text>
        <Text style={{ fontSize: 11, textAlign: 'center' }}>
          Please choose from the 3 learning methods you want below
        </Text>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <CustomCardBox
            title="Vidio"
            img={
              <Image
                style={{ width: 80, height: 80, marginLeft: 10}}
                source={require('../assets/vidio.png')}
              />
            }
            onPress={() => navigation.navigate('Vidio')}
          />
          <CustomCardBox
            title="Materi"
            img={
              <Image
                style={{ width: 80, height: 80, marginLeft: 10,}}
                source={require('../assets/material.png')}
              />
            }
            onPress={() =>
              navigation.navigate('Material', { categoryId: categoryId })
            }
          />
          <CustomCardBox
            title="Quiz"
            img={
              <Image
                style={{ width: 80, height: 80, marginLeft: 10}}
                source={require("../assets/quiz.png")}
              />
            }
            onPress={() => navigation.navigate('QuizPage')}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Materi;
