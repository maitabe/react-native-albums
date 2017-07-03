import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*const AlbumList = () => {
	return (
		<View>
			<Text> Album List!!!! </Text>
		</View>
	);
};*/

//refactoring the functional component to a class component
class AlbumList extends Component {
	render() {
	return (
		<View>
			<Text> Album List!!!! </Text>
		</View>
	);
  }
}

export default AlbumList;