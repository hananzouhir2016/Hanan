//import libraries we need to  create a component
import React, { useState } from 'react';
import { StyleSheet, View, TextInput,FlatList,Text,TouchableOpacity,Image} from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import { Feather } from '@expo/vector-icons'; 
import SearchDropDown from './SearchDropDown'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.searchedText = "" 
    this.searching= false
    this.state = {
      films: [],
    }
  }
render() {

    const onSearch = (text) => {
      if (text) {
        this.searchedText = text 
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ films: data.results })
      })
      this.searching= true
      }
      else {
        this.searching= false
      }
  
    }
    return (
      <View style={styles.itemSearch}>
      <Feather name="search"  style={styles.itemIcon}/>
            <TextInput
                placeholder="Chercher"
                onChangeText={onSearch}
                platform="android"
               
                style={styles.TextInput}
              ></TextInput> 
                { 
                  this.searching&&
                  <SearchDropDown
                    onPress={() => this.searching=false}
                    dataSource={this.state.films} />   
                }  
              
     
       </View>  
       
    )
    }
  } 

// create style to component
const styles = StyleSheet.create({
  itemSearch: {
    margin: 15,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    //width:393.094,
    height:48.259 ,
    width:'90%',
    borderRadius: 5.98 ,
    flexDirection: 'row'
  },
  itemTexinput:{
    backgroundColor: '#FFFFFF',
  },

  itemIcon:{
    fontSize:30,
    color:"#C0C0C0",
    alignSelf:'center',
    marginHorizontal:15
  },
  itemMenu: {
    margin: 2000,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    height:40,
    borderRadius: 5,
    flexDirection: 'row'
  },
  TextInput:{
fontSize:19.73,
color:"#BDBEC1"
  }
  });

//Export to component so we can use it elsewhere in our project
export default  Search;