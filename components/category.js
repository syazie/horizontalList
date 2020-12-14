import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, AppRegistry, ScrollView } from 'react-native';
 
import { DrawerNavigator, StackNavigator } from 'react-navigation';



class Category extends React.Component{
    render(){
        return(
                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <Image source={this.props.imageUri} style={styles.image}/>
                    </View>
                    <View style={styles.container5}>
                        <Text style={styles.titleItem}>{this.props.name}</Text>
                    </View>
                </View>
        )
    }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:20,
  },
  title:{
      fontSize:18,
      fontWeight:'700',
      paddingHorizontal: 20
  },
  container2:{
    flex:1,
    backgroundColor:"white",
    paddingTop:10,
  },
  container3:{
      width:250,
      height:250,
      marginLeft:20,
      borderWidth:0.10,
      borderColor:'#dddddd'
  },
  container4:{
      flex:2,
  },
  container5:{
      flex:1,
      height:200
  },
  image:{
      flex:1,
      width:null,
      height:null,
      resizeMode:'cover',
  },
  titleItem:{
      flex:1,
      paddingLeft:10,
      paddingTop:10
  }
});

export default Category;