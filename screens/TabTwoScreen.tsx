import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput,Button ,Alert} from "react-native";
import { saveData } from "./api";


const Form = () => {

	//crea el objeto vacio
	const [data ,setdata] = useState({
		nombre:"",
		pollo:"",
		patatas:"",
		//id: Math.random()
		id :""
	})

	//actualiza los datos vacios pasando los datos del form
	const handleChange = (name:any,value:any) => setdata({...data, [name]:value})

	//lo guarda en el backend
	const handleSubmit=  () =>{
		//console.log(data)
		saveData(data)
	}


  return (
    <SafeAreaView>
		  <TextInput
			  style={styles.input}
			  placeholder="nombre"
		  		onChangeText={(text)=>handleChange('nombre',text)}

		  />
		  <TextInput
			  style={styles.input}
			  placeholder="pollo"
			  keyboardType="numeric"
			  onChangeText={(text)=>handleChange('pollo',text)}

		  />
		  <TextInput
			  style={styles.input}
			  placeholder="patatas"
			  keyboardType="numeric"
			  onChangeText={(text)=>handleChange('patatas',text)}

		  /> 
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
