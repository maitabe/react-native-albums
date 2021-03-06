/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class albums extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('albums', () => albums);

//===================================================
// Index.ios.js - place code in here for android

//import a library to help to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/components/AlbumList';


//create a component
/*const App = () => {
  return (
    <Text>Some Text</Text>
  );
};*/

//best practice
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


//render it to the device
AppRegistry.registerComponent('albums', () => App);

