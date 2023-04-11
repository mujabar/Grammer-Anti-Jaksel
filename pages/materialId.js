import react, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { globalStyle } from '../globalStyle';
import CardList from '../components/card/list';
import axios from 'axios';

export default function MaterialId({ navigation, route }) {
  const [dataMateri, setDataMateri] = useState([]);
  const [dataSubMateri, setDataSubMateri] = useState([]);
  const {materiId} = route.params;
  const {subMateriId} = route.params;
  const apiMateri = `https://adityae.my.id/v1/material/${materiId}`;
  const apiSubMateri = `https://adityae.my.id/v1/material/sub/${subMateriId}`;

  console.log('ini sub',subMateriId)
  
  useEffect(() => {
    getMateri();
    getSubMateri();
  }, []);

  const getMateri = () => {
    axios
      .get(apiMateri)
      .then(function (response) {
        setDataMateri(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(response);
      });
  };

  const getSubMateri = () => {
    axios
      .get(apiSubMateri)
      .then(function (response) {
        setDataSubMateri(response.data.data);
        console.log("sub", response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(response);
      });
  };


  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', paddingRight: 20, paddingLeft: 20 }}>
    <SafeAreaView style={{ marginTop: 60, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back-black.png')} />
        </TouchableOpacity>
        <Text style={[globalStyle.textTitle, { marginLeft: '34%' }]}>
          Material
        </Text>
      </SafeAreaView>
      <CardList title={dataMateri.judul} />
      <Text style={{textAlign: 'justify'}} > {dataMateri.materi1} </Text>
      <Text>{dataSubMateri.judul}</Text>
      <Text>{dataSubMateri.submateri}</Text>
    </SafeAreaView>
  );
}
