import React, { useState ,useEffect} from 'react';
import { Text,StyleSheet, View,ScrollView ,Image,ImageBackground,Picker,StatusBar,ActivityIndicator} from 'react-native';
import Serch from './Serch';
import * as Font from "expo-font"; 
export default class Entete extends React.Component { 
  constructor(props) {
    super(props);
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
      'Poppins-Regular': require('../assets/Fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {

 return (            
    <ScrollView   style={styles.h1}>  
       {this.state.fontLoaded ? (
         
<View>
    <ImageBackground    style={styles.action}>
    <View  style={styles.temT}>
          <Image source={require('../assets/menu1.png')} style={styles.image1}/>
          <Text style={styles.temText}>AGROTECH SMART IRRIGATION APP</Text>
          <Image source={require('../assets/meu.png')} style={styles.image2}/>
        </View>
       
      <Text style={styles.itemText1}> Bienvenue Ahmed</Text>
      <View style={{flexDirection: 'row',marginTop:10}}>
      
        <Text  style={styles.container}>Ait Amira</Text>
      <Image source={require('../assets/position.png')}    style={{ marginLeft:10,marginTop:10}}/> 
      </View>
      <Text style={styles.itemText2}>Mercredi 28 Avril 2021</Text>  
    
      <View style={styles.itemView1}>
           <Image source={require('../assets/sol2.png')} style={styles.ba1}/> 
           
           <Image source={require('../assets/sol0.png')} style={styles.ba2}/> 
           <Image source={require('../assets/sol1.png')} style={styles.ba3}/>

      </View> 
     
      <View style={{flexDirection: 'row',marginBottom:20}}>
         <Text style={styles.ba4}>Hier</Text>
         <Text style={styles.ba5}>Aujourd'huit</Text>
         <Text style={styles.ba6}>Demain</Text>

      </View> 
     
      <View style={styles.itemView2}>  
      <Serch 
      onPress={()=>this.props.navigation.navigate('Profile2')}
      title="Température" 
      data="29°C" 
      imageSource1={require('../assets/soliel.png')} 
      colore="#ED1F24"
       data1='29'
      />
     
      <Serch  
      onPress={()=>this.props.navigation.navigate('Profile5')} 
      title="Précipitation" 
      data="2mm" 
      imageSource1={require('../assets/precipitation.png')}
      colore="#01A9C8"
      data1='2'/>
     </View>
     </ImageBackground>
     
     <View style={styles.itemView4}>  
      <Serch
       onPress={()=>this.props.navigation.navigate('Profile4')}
      title="Humidité relative" 
      data="12%" 
      imageSource1={require('../assets/vent1.png')}  
      colore="#A8DFF7"
      data1='12'/>
      <Serch  
      onPress={()=>this.props.navigation.navigate('Profile')}
      title="Rayonnement"
      data="17.661 W/m" 
      imageSource1={require('../assets/song.png')}  
      colore="#FFC906" 
      data1='17'/>
     </View>

     <View style={styles.itemView3}>  
      <Serch 
       onPress={()=>this.props.navigation.navigate('Profile3')}
      title="Evatranspiration" 
      data="4mm" 
      imageSource1={require('../assets/rayonnement.png')} 
      colore="#87BE3F" 
      data1='4'/>
      <Serch
      onPress={()=>this.props.navigation.navigate('Profile1')}  
      title="Vent" 
      data="34km/h" 
      imageSource1={require('../assets/vent.png')} 
      colore="#E35264" 
      data1='29'/>
     </View>
     </View>
     ) : (
      <ActivityIndicator size="large" />
    )}
  
    </ScrollView >  
        );
      }
} 
    // create style to component
    const styles = StyleSheet.create({
      backgroundStyle: {
        flex: 1,
       // width: wp('100%'), 
      // width:457.429 
      },
      action: {
        height:460,
        //Swidth:240,
        alignContent:"center",
        flex:1,
        backgroundColor:"#16A550",
       //borderBottomStartRadius:60.81,
       //borderBottomEndRadius:60.81,
        
        }, 
      itemText1: {
        color: '#FFFFFF',
        fontSize:29,
        fontFamily:"Poppins-Bold",
        marginLeft:15

      },
      itemText2: {
        color: '#FFFFFF',
       // marginBottom:40,
        marginLeft: 230,
        fontSize:13.42 ,
        //borderRadius: 50,
        marginTop:2,
        fontFamily:"Poppins-Regular"
      },
      itemView1: {
        flexDirection: 'row',
        marginLeft:30,
        marginTop:20
      },
      ba1:{
     
        
        marginTop:30
      },
      ba2:{
     
        marginLeft:50,
        marginTop:30
      },
      ba3:{
        marginLeft:20
      },

      ba4:{
     fontSize:11.73,
     fontFamily:"Poppins-SemiBold",
     color:"#FFFFFF",
     marginTop:10,
     marginLeft:50
      },
      ba5:{
        fontSize:11.73,
        fontFamily:"Poppins-SemiBold",
        color:"#FFFFFF",
        marginLeft:80,
        marginTop:10
      },
      ba6:{
        fontSize:11.73,
        fontFamily:"Poppins-SemiBold",
        color:"#FFFFFF",
        marginLeft:40,
        marginTop:10
      },
      
      container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        width:153.276,
        height:42.277, 
       // width: wp('50%'),
        //height: hp('20%'),
        marginLeft:20,
       // marginTop:10,
       paddingLeft:20,
       paddingTop:10,
       fontSize:19
      
      },
      itemView2: {
        flexDirection: 'row'
      },
      itemView3: {
        flexDirection: 'row',
       marginTop:6
      },
      itemView4: {
        flexDirection: 'row',
        marginTop:130
      },
     
        action1: {
          //height:46,
          //width:240,
         // alignContent:"center",
         // flex:1,
         // backgroundColor:"#16A550",
        // borderBottomStartRadius:60.81,
        // borderBottomEndRadius:60.81,
          
          }, 
        h1: {
         // height:992.936,
        // width:457.429 
        //width: wp('100%'),
         //height: wp('30%'),
        
         }, 
         temT: {
          flexDirection: 'row',
          marginTop:40,
          marginBottom:10
        },
        temText: {

          fontSize:22,
          textAlign:"center",
          color:'#FFFFFF',
          marginBottom:10,
          fontFamily:'adobe-arabe',
         
        },
        image1:{
          marginLeft:9,
          marginRight:40
        },
        image2:{
          marginLeft:35,
         
        },
         label:{
           fontSize:22.02,
           fontWeight:"400",
           color:"#4E68B1"

         }
      });
