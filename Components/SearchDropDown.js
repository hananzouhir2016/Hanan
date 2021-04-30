import React from 'react';
import {TouchableOpacity,StyleSheet,ScrollView,View,Text,TextInput,Dimensions} from 'react-native';


export default function SearchDropDown(props) {
    const { dataSource } = props
    const {width, height} = Dimensions.get('window')
     return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}>
            <View style={styles.subContainer}>
                {
                      dataSource.length ?
                      dataSource.map(item => {
                            return (
                                <View style={styles.itemView}>  
                                   <Text>{item.title}</Text>
                                </View>
                            )
                        })
                        :
                        <View
                            style={styles.noResultView}>
                            <Text>No search items matched</Text>
                        </View>
                }
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '10.2%',
        left: 0, right: 0, bottom: 0,
    },
    subContainer: {

        backgroundColor: 'white',
        paddingTop: 10,
        marginTop: 40,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
       height:2000    
    },
    itemView: {
        // marginHorizontal: '10%',
        backgroundColor: 'white',
       // height: 400,
       width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});