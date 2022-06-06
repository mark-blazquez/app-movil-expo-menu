//import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React,{useEffect,useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ActivityIndicator } from 'react-native';



const FlatListBasics = () => {

	//define el contenido una vez se obtiene
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
  
	const getdata = async () => {
		try {
			const response = await fetch('http://192.168.2.30:8080/api/muestra');
			//const response = await fetch('https://torre-ubuntu.ddns.net:31059/api/muestra');

			const json = await response.json();
			//console.log(json)
			setData(json.pedidos);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}
  //para que se haga cada vez que se recarga la pag
	useEffect(() => {
	  getdata();
	}, []);
  
	return (
	  <View style={{ flex: 1, padding: 24 }}>
		{isLoading ? <ActivityIndicator/> : (
		  <FlatList
			data={data}
			renderItem={({ item }) => (
			  <Text>nombre {item.nombre} pollos {item.pollo} patatas {item.patatas} </Text>
			  
			)}
		  />
		  
		)}
	  </View>
	);
}
export default FlatListBasics;
