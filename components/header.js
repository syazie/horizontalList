import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, AppRegistry } from 'react-native';
 
import { DrawerNavigator, StackNavigator } from 'react-navigation';

export default class Header extends React.Component{

  render(){
    return(
      <View style={styles.header}>
        
      </View>
    );
  }
}

const styles=StyleSheet.create({
  header:{
    width:'100%',
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral'
  }
});