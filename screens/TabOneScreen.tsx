import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text,FlatList,TextInput } from 'react-native';
import React,{useEffect,useState} from 'react';
import { View } from '../components/Themed';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => { 
	//esto permite haceer la reacarga
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //define el contenido una vez se obtiene
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
  
	const getdata = async () => {
		try {
			const response = await fetch('http://192.168.2.122:8080/api/muestra');
			//const response = await fetch('https://192.168.68.113:8080/api/muestra');
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
    <SafeAreaView style={styles.tabla}>
      <ScrollView
        
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
			//ejeccuta la funcion de obtener los pedidos
            onRefresh={getdata}
          />
        }
      >
		<FlatList  

				data={data}
				renderItem={({ item }) => (
				//extraccion de la info
				<View style={styles.tabla}>
					{/*<Text style={styles.tabla}>nombre {item.nombre} pollos {item.pollo} patatas {item.patatas} id {item.id}</Text>*/}
					<Text >nombre {item.nombre} </Text>
					<Text >pollos {item.pollo}  patatas {item.patatas} </Text>
					<TextInput  >id {item.id}</TextInput>
					<Text >-----------------------------------------</Text>


				</View>
				)}
				
		/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabla :{
	  backgroundColor: 'white',
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding:5
  }
});

export default App;