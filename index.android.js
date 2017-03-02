
// import library to help create
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
	<View>
	  <Header headerText={'Hello world'} />
	  <AlbumList />
	</View>
);

// Render it to device
AppRegistry.registerComponent('helloProject',() => App);