import React, { Component } from "react";  
import { Platform, StyleSheet, View, Button, TextInput, } from "react-native";  

export default class App extends Component {  

  constructor() {  
super();  
this.state = { TextInputDisableStatus: true }  
}  


  onPressButton = () => {  
this.setState({ TextInputDisableStatus: false })  
}  

  render() {  
return (  
<View>  

<TextInput  
          placeholder="Enter Your Userame"  
          underlineColorAndroid='transparent'  
           
          editable={this.state.TextInputDisableHolder}  
/>  

<Button  
          onPress={this.onPressButton}  
          title="Update Username"  
          color="#841584"  
          accessibilityLabel="Update Username"  
/>  

</View>  
);  
}  
}  

