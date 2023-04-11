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

export default function Material({ navigation, route }) {
  const [dataMateri, setDataMateri] = useState([]);
  const { categoryId } = route.params;
  const apiMateri = `https://adityae.my.id/v1/material/category/${categoryId}`;

  console.log('coba', dataMateri.data);
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

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <SafeAreaView style={{ margin: 20, marginTop: 60, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back-black.png')} />
        </TouchableOpacity>
        <Text style={[globalStyle.textTitle, { marginLeft: '34%' }]}>
          Material
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
        <SafeAreaView style={{ width: '100%', flex: 1 }}>
          {dataMateri.data?.map((data) => (
            <CardList
              title={data.judul}
              click={() =>
                navigation.navigate('MaterialId', {
                  materiId: data.id,
                  categoryId: categoryId,
                  subMateriId: data.submaterial.id
                })
              }
              style={{ width: '100%', flex: 1 }}
            />
          ))}
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
