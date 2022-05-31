//import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React,{useEffect,useState} from 'react';
import {load} from '../api'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ActivityIndicator } from 'react-native';

//export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	/*
	const [tasks, setTask] = useState([])

	const loadTask = async () => {
		const data = await load()
		setTask(data)
		//console.log(data)
	}

	useEffect(() => {
		loadTask()//,
		//console.log("se ha refrescao")
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pedidos</Text>
			
			<View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<FlatList 
			
			data={tasks}
			//sirve para pasarle el item obtenido en task 
			renderItem={()=>{
				return <Text > pepe</Text>
			}}
			/>
		</View>
	
	);
	
	const data = async () => {
		const data = await load()
		return
		//setTask(data)
		//console.log(data)
	}
	console.log(data)
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
*/
/*
const styles = StyleSheet.create({
	container: {
	 flex: 1,
	 paddingTop: 22
	},
	item: {
	  padding: 10,
	  fontSize: 18,
	  height: 44,
	},
  });
  
  const FlatListBasics = () => {
	const [tasks, setTask] = useState([])

	const loadTask = async () => {
		const data = await load()
		setTask(data)
		console.log(data)
	}

	useEffect(() => {
		loadTask()//,
		//console.log("se ha refrescao")
	}, [])
	return (
	  <View style={styles.container}>
		<FlatList
		  /*data={[
			{key: 'Devin'},
			{key: 'Dan'},
			{key: 'Dominic'},
			{key: 'Jackson'},
			{key: 'James'},
			{key: 'Joel'},
			{key: 'John'},
			{key: 'Jillian'},
			{key: 'Jimmy'},
			{key: 'Julie'},
		  ]}
		  data={tasks}

		  renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
		/>
	  </View>
	);
  }
  
  export default FlatListBasics;*/
  const FlatListBasics = () => {


	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
  
	const getdata = async () => {
	   try {
		const response = await fetch('http://192.168.2.30:8080/api/muestra');
		const json = await response.json();
		console.log(json)
		setData(json.pedidos);
	  } catch (error) {
		console.error(error);
	  } finally {
		setLoading(false);
	  }
	}
  
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
