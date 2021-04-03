import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import ToyAnimation from '../components/Toys.js';
import * as firebase from "firebase";
import db from "../config.js";

export default class SignupLoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId: "",
            password: ""
        }
    }
    
    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response) => {
            return Alert.alert("User added successfully");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        });
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
            return Alert.alert("Successfully Logged In");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        });
    }
    
    
    
    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.profileContainer}>
                    <ToyAnimation/>
                    <Text style={styles.title}> Toys Exchange </Text>
                </View>
                <View>
                    <TextInput style={styles.loginBox} 
                        keyboardType='email-address' 
                        placeholder='abc@hotmail.com'
                        onChangeText={(text) => 
                            this.setState ({emailId: text})
                        }/>
                    
                   
                    
                    <TextInput style={styles.loginBox} 
                        secureTextEntry= {true}
                        placeholder='Enter password'
                        onChangeText={(text) => 
                            this.setState ({password: text})
                        }/>
            
                   
                    <TouchableOpacity style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                        onPress={() => {this.userLogin(this.state.emailId, this.state.password)}}
                    >
                        <Text style={styles.buttonText}> Login </Text> 
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.button}
                        onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}
                    >
                        <Text style={styles.buttonText}> Sign Up </Text> 
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({ 
    container:{ 
        flex:1, 
        backgroundColor:'#F8BE85' 
    }, 
    profileContainer:{ 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
    }, 
    title :{ 
        fontSize:65, 
        fontWeight:'300', 
        paddingBottom:30, 
        color : '#ff3d00' 
    }, 
    loginBox:{ 
        width: 300, 
        height: 40, 
        borderBottomWidth: 1.5, 
        borderColor : '#ff8a65', 
        fontSize: 20, 
        margin:10, 
        paddingLeft:10 
    }, 
    button:{ 
        width:300, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#ff9800", 
        shadowColor: "#000", 
        shadowOffset: { 
            width: 0, 
            height: 8, 
        }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
    }, 
    buttonText:{
         color:'#ffff', 
         fontWeight:'200',
         fontSize:20 
    }, 
    buttonContainer:{ 
        flex:1, 
        alignItems:'center' 
    } 
})