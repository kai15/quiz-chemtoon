import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Animbutton extends Component {
  constructor(props) {
     super(props);
     this.state ={
       status: false
     }
   }
   _onPress(){
     this.props._onPress(!this.props.status)
     this.setState({ status: !this.state.status})
     switch (this.props.effect) {
       case 'bounce':
         this.refs.view.bounce(800)
         break;
       case 'flash':
         this.refs.view.flash(800)
         break;
       case 'jello':
         this.refs.view.jello(800)
         break;
       case 'pulse':
         this.refs.view.pulse(800)
         break;
       case 'rotate':
         this.refs.view.rotate(800)
         break;
       case 'rubberBand':
         this.refs.view.rubberBand(800)
         break;
       case 'shake':
         this.refs.view.shake(800)
         break;
       case 'swing':
         this.refs.view.swing(800)
         break;
       case 'tada':
         this.refs.view.tada(800)
         break;
       case 'wobble':
         this.refs.view.wobble(800)
         break;
     }

   }
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <Animatable.View ref="view" style={{ backgroundColor: this.props.onColor, borderWidth: 2, borderColor: 'blue', margin: 5, borderRadius: 30/2, width: 30, height: 30}}>
          {/* <View style={{borderWidth: 3, borderRadius: 50, height: 100, width: 100}}></View> */}
        </Animatable.View>
      </TouchableWithoutFeedback>
      {this.props.option != "gambar" ?
      <View style={{flex:1, flexShrink: 1}}>
          <Text style={{padding: 8}}>{this.props.text}</Text>
      </View>
        : this.props.text}
      </View>
    );
  }
}