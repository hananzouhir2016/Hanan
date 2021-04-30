import React from 'react'
import { View, Text,  StyleSheet, ScrollView, ImageBackground,Image,Dimensions} from 'react-native';
import Search from './Search';
import Menu1 from './Menu1'
import Dashboard from './Dashboard'
import Base from './Base'
import ButtomVoir from './ButtomVoir'
const menu=(props) =>{
  const {width, height} = Dimensions.get('window')
    return (
<ScrollView  style={styles.container}>
  
  
    <ImageBackground  source={require('../assets/ArruereR.png')}style={styles.action}>
      <View  style={styles.temT}>
      <Image source={require('../assets/menu1.png')} style={styles.image1}/>
    <Text style={styles.temText}> AGROTECH SMART IRRIGATION APP</Text>
    <Image source={require('../assets/meu.png')} style={styles.image2}/>
    </View>
    <View style={styles.temView3}>
    <Text style={styles.temText1}> Station:{"\n"}AIT AMIRA</Text>
    
    <Image source={require('../assets/Position1.png')} style={styles.Image} />
    </View>
    <Text style={styles.temText4}> Chercher d'autres stations</Text>

    <Search/>
  <Base back={require('../assets/soleil.png')}
  title="Rayonnement"
  unite="W/m2"
  
  />
    </ImageBackground>
    <View style={styles.temView2}>
      <View style={styles.temText5}>
        <Menu1/>
        </View>
        
    </View>
    <View style={styles.temText7} >

      <ButtomVoir/>
    </View>
    
</ScrollView >
    
    );
};
export default menu;
const styles = StyleSheet.create({
    action: {
       height:400,
       width:365,
       paddingTop:20
    },
    text: {
        
    },
    temView2: {
        flexDirection: 'row',
        marginTop:120
      },
      temT: {
        flexDirection: 'row',
        
      },
      temView3: {
        flexDirection: 'row',
        
      },
      temText: {
        
        fontSize:18,
        textAlign:"center",
        color:'#FFFFFF',
        marginBottom:10,

      },
      temText4: {
       
        fontSize:17,
        color:'#FFFFFF',
        margin:5,
        marginLeft:20

      },
      temText1: {
       
        fontSize:40,
        color:'#FFFFFF',
        margin:10,
        marginBottom:0

      },
      temText5: {   
       marginLeft:10,
       marginRight:10
      },
      temText6: {   
        marginLeft:10,
        marginTop:40
       
       },
       temText7: {   
        marginLeft:100,
        marginTop:100
       
       },
    container: {
        flex:1,  
       
    },
    Image:{
      marginLeft:60,
      marginTop:30
     
    },
    temText8: {
       
      fontSize:20,
      color:'#F15C22',
      
     textAlign:'center'

    },
    image1:{
      marginLeft:9,
      marginRight:25
    },
    image2:{
      marginLeft:35,
     
    }
}
);