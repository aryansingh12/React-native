
import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from "react-native"

class Comment extends Component{
  
  render(){
        return (
            <View>
            <View style = {styles.container}>
                <Text>Commments form</Text>
            </View>
            <View>
                <TextInput
                    style={{height: 60, borderColor: 'gray', borderWidth: 1,marginTop:60}}
                    onChangeText={(text) => this.setState({text})}
                    value={'Name'}
                    text='Write your name here'
                />
            </View>
            <View>
                <TextInput
                    style={{height: 200, borderColor: 'gray', borderWidth: 1,marginTop:40}}
                    onChangeText={(text) => this.setState({text})}
                    value={'Comment'}
                />
            </View>
            <View style={{margin:30}}>
            <Button title='Post Comment'/>
            </View>
            
            </View>
        );
    }
}

export default Comment;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    textinput:{
     height:40,
     borderColor:'gray',
     borderWidth:1   
    }
})