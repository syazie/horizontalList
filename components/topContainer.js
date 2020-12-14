import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, AppRegistry, ScrollView, FlatList, TouchableHighlight  } from 'react-native';
 
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Category from './category';

import { data } from './data';

export default class TopContainer extends React.Component{

  constructor(props){
      super(props);
      this.state = {};
  }

  renderData = ({ item }) => {
      return(

        <ScrollView scrollEventThrottle={14}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <ScrollView horizontal={true}>
                        <Category imageUri={item.image} name={item.category} />
                    </ScrollView>  
                </View>
            </View>
        </ScrollView>
      )
  }

  render(){
      return (
            <View>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={this.renderData}
                    keyExtractor={item => item.id}
                />
            </View>
      );
  };
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:20,
  },
  title:{
      fontSize:17,
      fontWeight:'700',
      paddingHorizontal: 20
  },
  container2:{
    flex:1,
    backgroundColor:"white",
    paddingTop:10,
  },
  container3:{
      width:190,
      height:190,
      marginLeft:20,
      borderWidth:0.5,
      borderColor:'#dddddd'
  },
  container4:{
      flex:2,
  },
  container5:{
      flex:1,
  },
  image:{
      flex:1,
      width:null,
      height:null,
      resizeMode:'cover',
  },
  titleItem:{
      flex:1,
      paddingLeft:50,
      paddingTop:10
  }
});