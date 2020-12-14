import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, AppRegistry } from 'react-native';
 
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Header from './components/header';

import TopContainer from './components/topContainer';

export default class App extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <Header />
        <TopContainer />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
});