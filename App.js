import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
export default class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
     name: 'World!',
     }
   }
  
  onClick = () => {
      fetch('http://localhost:8080/clickRegister', {
             method: 'POST'
          })
          .then((response) => response.json())
          .then((responseJson) => {
             console.log(responseJson);
             // this.setState({
             //    data: responseJson
             // })
          })
          .catch((error) => {
             console.error(error);
          });
   };


   render() {
   return (
     <View style={styles.container}>
       <Text>Hello {this.state.name}</Text>
       <Button 
            onPress={() => {this.onClick()}} 
            title='Click to register'
            color='#4169E1'>
       </Button>
     </View>
   );
   }
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   }, 
   nameText: {
     fontSize: 50,
     padding: 15,
   }
});
