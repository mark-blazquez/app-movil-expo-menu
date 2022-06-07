import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput,Button ,Alert} from "react-native";
import { deleteData } from "./api";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Form = ({ navigation }) => {

	//crea el objeto vacio
	const [data ,setdata] = useState({
		id :""
	})

	//actualiza los datos vacios pasando los datos del form
	const handleChange = (name:any,value:any) => setdata({...data, [name]:value})

	//lo borra en el backend
	const handleSubmit=  () =>{
		//console.log(data)
		deleteData(data)
		navigation.navigate('TabOne')

	}


  return (
    <SafeAreaView>
		  <TextInput
			  style={styles.input}
			  placeholder="id"
			  keyboardType="numeric"
			  //value= {Math.random()}
			  onChangeText={(text)=>handleChange('id',text)}

		  />
		  <Button
			  onPress={handleSubmit}
			  title="enviar"
		  />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;

//-------------------------------------------------------------------
