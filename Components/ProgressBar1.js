import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated,ImageBackground,StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

//import Animated, { Easing } from 'react-native-reanimated';

const ProgressBar1=props =>{
    const animatedValue=React.useRef(new Animated.Value(-1000)).current;
    const reactive=React.useRef(new Animated.Value(-1000)).current;
    const [width, setWidth]=React.useState(0);
    React.useEffect(() =>{
        Animated.timing(animatedValue, {
          toValue:reactive,
          duration:400,
          
          //easing:Easing.bounce(),
          useNativeDriver: true,

        }).start();
    }, []);
    React.useEffect(() => {
        reactive.setValue(-width +(width*props.step)/100);
    }, [props.step, width]);


    return ( 
    <View> 
       
    <View 
    onLayout={(e) =>{
    const newWidth =e.nativeEvent.layout.width;
    setWidth(newWidth);
    }}
    style={{
        height:10,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius: 10,
        overflow:"hidden",
        width:'90%',
        margin:10
    }}>


<Animated.View 
         
        
         style={{
         height:10,
         width:'100%',
         backgroundColor:props.colorb,
         borderRadius:10,
        
         borderTopRightRadius:0,
         borderBottomRightRadius:0,
         position:'absolute',
         left:0,
         top:0,
         transform:[
             {translateX:animatedValue,
             },
             
         ],
         }}/>
 

        
        

       


        
</View>

</View>
)}

export default ProgressBar1;

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
   // padding:20,
  },
  containerr:{
    flex: 1,
    height:'10%'
  },
  transform:{
    transform: [
        { rotate: "-90deg" }, 
      
      ],
      marginTop:'40%',
  }
});