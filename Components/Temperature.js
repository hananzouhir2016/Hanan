import React from 'react'
import { View, Text,  StyleSheet, ScrollView, ImageBackground,Image,Dimensions,ActivityIndicator} from 'react-native';
import Search from './Search';
import Menu1 from './Menu1'
import Dashboard from './Dashboard'
import Base from './Base'
import ButtomVoir from './ButtomVoir'
import * as Font from "expo-font"; 
import ProgressBar from "./ProgressBar"


export default class Temperature extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      
      'Poppins-BlackItalic': require('../assets/Fonts/Poppins-BlackItalic.ttf'),
      'OpenSans-Bold': require('../assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('../assets/Fonts/OpenSans-Regular.ttf'),
      'adobe-arabe': require('../assets/Fonts/ArbFONTS-22016-adobearabic.ttf'),
      'Poppins-Bold': require('../assets/Fonts/Poppins-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (

      <ScrollView style={styles.container2}>
                {this.state.fontLoaded ? (
        <View>
          <ImageBackground  source={require('../assets/ArriereS.png')} style={styles.action}>
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
      <Base back={require('../assets/Temperature1.png')}
      title="Temperature"
      unite="°C"
      />
      </ImageBackground>
    <View  >
  
      <View style={styles.temView2}>
        <View style={styles.temText5}>
        
          <Menu1/>
          </View>
       
          
      </View>
      <View style={styles.temText7}>
        <ButtomVoir/>
        
      </View>
      </View>
      </View>
        ) : (
          <ActivityIndicator size="large" />
        )}

     
</ScrollView>
  
    );
  }
}

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
     marginTop:10
   },
   temT: {
     flexDirection: 'row',
     
   },
   temView3: {
     flexDirection: 'row',
     
   },
   temText: {
     
     fontSize:22,
     textAlign:"center",
     color:'#FFFFFF',
     marginBottom:10,
     fontFamily:'adobe-arabe',
   },
   temText4: {
    
     fontSize:17,
     color:'#FFFFFF',
     margin:5,
     marginLeft:20,
     fontFamily:'OpenSans-Regular'

   },
   temText1: {
    
     fontSize:40,
     color:'#FFFFFF',
     margin:10,
     marginBottom:0,
     fontFamily:'OpenSans-Bold'

   },
   temText5: {   
    marginLeft:10,
    marginRight:10,
    marginTop:120
   },
   temText6: {   
     marginLeft:60,
     marginTop:10
    
    },
    temText7: {   
     marginLeft:100,
     marginTop:100
    
    },
 container: {
     flex:1,  
    
 },
 container2: {
backgroundColor:"#F8FAFC" 
 
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
   marginRight:40
 },
 
 image2:{
   marginLeft:35,
  
 }
}
)
