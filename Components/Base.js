import React from 'react';
import { Text,StyleSheet, View, TouchableOpacity,Image,ActivityIndicator } from 'react-native';
import * as Font from "expo-font"; 
export default class Base extends React.Component{
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
             <View style={styles.itemView2}>
                    <Text style={styles.itemText}>Mardi 27 Avril{"\n"}2021</Text> 
                    <Image source={this.props.back} style={styles.Image} />
<View>
                    <Text style={styles.itemText1}>{this.props.title}
                    
                   
                    </Text> 
                     <Text style={styles.itemText2}>{this.props.unite}</Text>
                     </View>
                    </View>
                    ) : (
                      <ActivityIndicator size="large" />
                    )}
          </View>
        );
      }
    }
    // create style to component
    const styles = StyleSheet.create({
    
      itemView2: {
        backgroundColor: 'white',
        height:150.42,
        width:"90%",
        margin:"5%",
        borderRadius: 9.29,
        marginRight:"5%",
        marginLeft:"5%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        flexDirection: 'row',
      },
     
      itemText:{
       
        marginTop:50,
        marginLeft:10,
        marginRight:10,
        fontFamily:"Poppins-Regular",
        fontSize:13.93,
        

      },
      itemText1:{
     
        marginTop:25,
       
        fontFamily:"Poppins-Regular",
        fontSize:13.93,
      },
      itemText2:{
        marginLeft:65,
        fontFamily:"Poppins-Regular",
        fontSize:28.13 ,
      },
      Image:{
      
        marginTop:40
      }
      });
    //Export to component so we can use it elsewhere in our project
 