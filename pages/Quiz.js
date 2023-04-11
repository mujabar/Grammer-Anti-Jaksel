import react, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import CardList from '../components/card/list';
import CardSoal from '../components/card/soal';
import { globalStyle } from '../globalStyle';
import axios from 'axios';

export default function QuizPage({navigation}) {
  const [selected, isSelected] = useState('');
  const [dataQuiz, setDataQuiz] = useState([]);
  const [total, setTotal] = useState(0)
  const [key, setKey] = useState();
  const [id, setId] = useState(1);
  console.log(total);

  const apiMateri = `https://adityae.my.id/v1/quiz/${id}`;


  useEffect(() => {
    getMateri();
  }, []);

  const getMateri = () => {
    axios
      .get(apiMateri)
      .then(function (response) {
        setDataQuiz(response.data.data);
        console.log( "coba", response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(response);
      });
  };

  const nextHandler = () =>{
    if( id == 11){
      navigation.navigate('Skor', {total: total})
    }
    else{
      setKey(dataQuiz.key)
      setId( id +1)
      getMateri()
      validation()
    }
  }

  const validation = () => {
    if(selected == key){
      setTotal(total +1)
    }
  }

  

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <SafeAreaView style={{ margin: 20, marginTop: 60, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow-back-black.png')} />
        </TouchableOpacity>
        <Text style={[globalStyle.textTitle, { marginLeft: '30%' }]}>
          Quiz Tenses
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{width: '100%' }}>
        <SafeAreaView style={{ width: '100%', flex: 1 }}>
          <CardSoal nomer={dataQuiz.id} soal={dataQuiz.question} />
        </SafeAreaView>
        <SafeAreaView style={{backgroundColor: "#D7DBF0", borderRadius: 10, marginHorizontal: 4}} >
          <TouchableOpacity onPress={() =>{isSelected('a'), nextHandler()}}>
            <View style={ selected == 'a' ? styles.cardSelectd : styles.card}>
              <View style={ selected == 'a' ? styles.noSelected : styles.no}>
                <Text style={ selected == 'a' ? {color: '#5D52DD'} : { color: 'white' }}>A</Text>
              </View>
              <View style={styles.soal}>
                <Text  style={ selected == 'a' ? {color: '#FFFF'} : { color: '#5D52DD' }}  >{dataQuiz.a}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{isSelected('b'), nextHandler()}}>
            <View style={ selected == 'b' ? styles.cardSelectd : styles.card}>
              <View style={ selected == 'b' ? styles.noSelected : styles.no}>
                <Text style={ selected == 'b' ? {color: '#5D52DD'} : { color: 'white' }}>B</Text>
              </View>
              <View style={styles.soal}>
                <Text  style={ selected == 'b' ? {color: '#FFFF'} : { color: '#5D52DD' }}  >{dataQuiz.b}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{isSelected('c'), nextHandler()}}>
            <View style={ selected == 'c' ? styles.cardSelectd : styles.card}>
              <View style={ selected == 'c' ? styles.noSelected : styles.no}>
                <Text style={ selected == 'c' ? {color: '#5D52DD'} : { color: 'white' }}>C</Text>
              </View>
              <View style={styles.soal}>
                <Text  style={ selected == 'c' ? {color: '#FFFF'} : { color: '#5D52DD' }}  >{dataQuiz.c}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{isSelected('d'), nextHandler()}}>
            <View style={ selected == 'd' ? styles.cardSelectd : styles.card}>
              <View style={ selected == 'd' ? styles.noSelected : styles.no}>
                <Text style={ selected == 'd' ? {color: '#5D52DD'} : { color: 'white' }}>D</Text>
              </View>
              <View style={styles.soal}>
                <Text  style={ selected == 'd' ? {color: '#FFFF'} : { color: '#5D52DD' }} >{dataQuiz.d}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#D7DBF0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardSelectd: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#5D52DD',
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
    backgroundColor: '#5D52DD',
  },
  noSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  },
  soal: {
    fontWeight: '500',
    fontSize: 14,
    color: '#19224C',
    marginLeft: 8,
    textAlign: 'justify',
    maxWidth: 240,
  },
});
