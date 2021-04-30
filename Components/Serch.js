import React from 'react';
import { Text,StyleSheet, View, TouchableOpacity,Image,Picker ,Dimensions} from 'react-native';
import ProgressBar1 from './ProgressBar1'
const Serch =props => {
  const {width, height} = Dimensions.get('window')
        return (
          <TouchableOpacity style={styles.itemView2} onPress={props.onPress}> 
                    <TouchableOpacity  style={styles.TouchableOpacity} onPress={props.onPress}>
                    <View style={styles.container}>
                    <Image source={props.imageSource1}  style={styles.Image}/>
                    </View>
             </TouchableOpacity>
                    <Text style={styles.itemText}>{props.title}</Text> 
                    <Text style={styles.itemText1}>{props.data}</Text> 
                    <ProgressBar1 colorb={props.colore} step={props.data1}/>
          </TouchableOpacity>
        );
      };
    // create style to component
    const styles = StyleSheet.create({
      TouchableOpacity:{
        marginLeft:45,
        marginTop:20,
        borderRadius: 37.55 ,
        width:73.461, 
        height:73.461,
        padding:20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      Image:{
        justifyContent: 'center',
      },
      
      itemView2: {
        backgroundColor: 'white',
        height:178.476 ,
        width:"45%",
        margin:10,
        marginRight:5,
        marginLeft:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        borderRadius: 4.68,
        
        elevation: 24,
      },
      itemFont: {
       borderRadius: 500,
       width:90,
       padding:20,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 16,
       },
       shadowOpacity: 0.58,
       shadowRadius: 16.00,
       
       elevation: 24,
       
      },
      itemFont2: {
        color:'blue',
        fontSize:24,
        marginTop:20,
        marginLeft:40,
        backgroundColor: 'white',
        borderRadius: 500,
        width:70,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 16,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        elevation: 24,
        
       },
      itemText:{
        textAlign: 'center',
        marginTop:5,
        fontSize:17.02,
        fontWeight:"400"

      },
      itemText1:{
        textAlign: 'center',
        marginTop:5,
        fontSize:13.64,
        fontWeight:"400"

      },
      Image2:{
        width:160,
        marginLeft:5,
        marginTop:5
      }
      });
    //Export to component so we can use it elsewhere in our project
    export default  Serch;