import React from 'react'
import { Text, TouchableOpacity,ActivityIndicator,View} from 'react-native';
import * as Font from "expo-font"; 
export default class Date extends React.Component{
    constructor() {
        super();
        this.state = {
          fontLoaded: false
        };
      }
    
      async componentDidMount() {
        await Font.loadAsync({
          
          'Poppins-Regular': require('../assets/Fonts/Poppins-Regular.ttf'),
        
        });
    
        this.setState({ fontLoaded: true });
      }
      render() {
    
   
  
    
    return (
        <View > 
        {this.state.fontLoaded ? (
         <TouchableOpacity style={{position: 'absolute'}}>
         <Text style={{
             fontSize: 16,
             marginLeft:25 ,
            // marginTop:10,
             //marginLeft:11,
             color:'#4A54A4',
             fontWeight:"bold",
             fontFamily:'Poppins-Regular'
             }}>{this.props.date2}</Text>
         </TouchableOpacity>
           ) : (
            <ActivityIndicator size="large" />
          )}
</View>
    );
}
}