import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Navigation from './root/Navigation';

// Text.defaultProps.allowFontScaling=false;

export default class App extends React.Component {
  
  render() {
    return <Navigation />;
  }
}