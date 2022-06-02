import React from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useForm, useController } from 'react-hook-form'

function Input({ name, control }) {
  const { field } = useController({
    control,
    name
  })

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={name}
    />
  )
}

function HookForm() {
  const { control, handleSubmit } = useForm()

  const onSubmit = data => {
	try {
		fetch('http://192.168.2.30:8080/api/nuevo',{
			method: 'post',
			headers:{
				'accept': 'application/json',
				'content-type': 'appplication/json'
			},
			/*body:JSON.stringify({
				nombre:'',
				pollo:'',
				patatas:
			})*/
			body:JSON.stringify(data)
		});
		//Alert.alert('Form Submitted!', JSON.stringify(data), [{ text: 'OK' }])

	} catch (error) {
		console.error(error);
	}
  }

  return (
    <View style={styles.container}>
      <Input name="nombre" control={control} />
      <Input name="pollo" control={control} />
	  <Input name="patatas" control={control} />
	  <Input   name="id" control={control} />



      <Button title="añadir" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke'
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default HookForm