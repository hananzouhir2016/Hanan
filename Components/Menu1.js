import React,{ useState, useEffect } from 'react'
import { View, Text, TouchableOpacity,  StyleSheet,Image,Dimensions} from 'react-native';
import DateA from './DateA' ;
const Menu1=(props) =>{
  const {width, height} = Dimensions.get('window')
    const [currentDate, setCurrentDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');
    useEffect(() => {
        setCurrentDate(
            new Date().getDate()
        );
        setCurrentMonth(
            new Date().getMonth()+1
        );
      }, []);
    return (
        <View>
        <View style={{flex: 1}}>
        <Image
         style={{
           alignItems:"center",
           alignContent:"center",
           
         }}
         source={require('../assets/Date.png')}
         />
         <View style={{position: 'absolute',marginTop:9}}>
         <DateA date2={currentDate-1+'\n'+'0'+currentMonth}  
         />
         </View>
         <View style={{position: 'absolute',marginTop:65}}>
         <DateA date2={currentDate-1+'\n'+'0'+currentMonth}  
         />
         
         </View>
         <View style={{position: 'absolute',marginTop:120}}>
         <DateA date2={currentDate+1+'\n'+'0'+currentMonth}   
         />
         </View>
         <View style={{position: 'absolute',marginTop:170}}>
         <DateA date2={currentDate+2+'\n'+'0'+currentMonth}   
         />
         </View>
        
        

        </View>

        
        </View>

    
    );
}


;
export default Menu1;
const styles = StyleSheet.create({
    container:{
         
      marginTop:3, 
         },
       

   
  
}
);