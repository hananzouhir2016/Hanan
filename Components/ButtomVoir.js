import React,{Component} from 'react'
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    
Image,
ImageBackground,} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

const ButtomVoir=(props) =>{

    const {width, height} = Dimensions.get('window')


    return (
         <TouchableOpacity onPress={()=>props.navigation.navigate('menu')}>
           <LinearGradient
                   colors={['#0B193C', '#0B193C']}
                   style={styles.signIn2}
           >
                    <Text style={styles.textSign}>Voir Plus</Text>
                   
               </LinearGradient>
           </TouchableOpacity>
        

    
    );
}


;
export default ButtomVoir;
const styles = StyleSheet.create({
    text: {
        color: '#0c7801',
        marginTop:5,
        fontWeight: 'bold',
    
    },
    signIn: {
        width: 168.679,
        height: 47.695 ,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14, //50
        flexDirection: 'row',
        marginBottom:26,
        
    },
    icone:{
        marginLeft:280,
    marginBottom:120,
    },
    signIn2: {
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14, //50
        flexDirection: 'row',
        
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:19
    },
       

   
  
}
);