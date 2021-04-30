import React from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet,  Image, Text,View} from 'react-native';

export default class Dashboard extends React.Component{
    
      render() {
    return ( 
        
             
               <View style={styles.temText}>
                      <ImageBackground  style={styles.pictur} source={this.props.picture}  
                      >
                     <Text style={{ fontSize: 40,paddingTop:80,paddingBottom:70,marginLeft:100}}>11mm</Text>
                    </ImageBackground>
                      </View>
                    
            
    );
}
}
const styles = StyleSheet.create({   
    temText:{
        width:60
        
    },
    pictur:{
        width:290.172,
        height:230
        //padding:200
    },
    
}
);
