import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React,{useEffect,useState} from 'react';
import {load} from '../api'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	const [tasks, setTask] = useState([])

	const loadTask = async () => {
		const data = await load()
		setTask(data)
		//console.log(data)
	}

	useEffect(() => {
		loadTask()
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pedidos</Text>
			<FlatList 
			data={tasks}
			//sirve para pasarle el item obtenido en task 
			renderItem={({})=>{
				console.log()
				return <Text style={styles.title}> pepe</Text>
			}}
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

		</View>
	);
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
