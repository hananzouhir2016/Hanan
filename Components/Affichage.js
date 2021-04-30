import React from 'react';
import { View } from 'react-native';
import { Button,StyleSheet,ScrollView } from 'react-native';
import ProgressBar from './ProgressBar'
import DashedGradientProgressBar from './DashedGradientProgressBar'
import Menu1 from './Menu1'
const Affichage =(props,navigation) => {
        return (
       <View style={styles.container}>
           <Button style={styles.main_container}
            onPress={()=>props.navigation.navigate('Notifications')}
            title="ffgghjh"
            /> 
      
            
            <View style={styles.container3}>
            
           
            <ProgressBar
            
            />
              </View>
           
            
            
         </View>
        );
      };
    
    // create style to component
    const styles = StyleSheet.create({
      main_container: {
        flexWrap: 'wrap',
        marginTop: 6000
      },
      container3: {
    
        transform:[
           { rotate: "-90deg" }
        ]
      },
      container: {
      paddingTop:50
      },
      });
    //Export to component so we can use it elsewhere in our project
    export default  Affichage;