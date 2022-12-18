import React from 'react'
import { View, Text, StyleSheet, TextInput,Image ,Touchable, TouchableOpacity, Alert } from 'react-native'
import { Bottombar } from './Bottm'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
* @author
* @function 
**/
export const Login = ({navigation}) => {

const { container } = styles
 return(
         
  <View style={container}>
 
  <Image style={{height:200,width:200,}} source={{uri:'https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png'}}></Image>  
  <text style={{fontSize: 40,fontWeight: 'bold'}}>Log in to see more</text>
  
  
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Email Adress or phone number'
></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Password'

  ></TextInput>
  
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text2}>           Log in</Text>
  </TouchableOpacity>
 
  <TouchableOpacity><Text style={styles.Text}>forgot your password?</Text></TouchableOpacity>
  <TouchableOpacity><Text style={styles.Text}>Are you a bussiness?Get Started</Text></TouchableOpacity>
  <Text style={styles.Text}>Not on Pinterest Yet?</Text>
 
  <TouchableOpacity style={styles.button}
    
  onPress={() => navigation.navigate('Register')}


>
    <Text style={styles.Text2}>           Signup</Text>
  </TouchableOpacity>
  
  <TouchableOpacity  style={styles.button2}
  
>
    <Text style={styles.Text2}>    continue with facebook</Text>
  </TouchableOpacity>
  </View>
  )



 }


const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'white',
   height:'100%',
   width:'100%'
  },
  
  View:{
    marginTop:"2%",    
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
    
                       
  },
  Login:{
    height:40,
     width:250,
     padding:10,
     borderColor:'red',
     borderWidth:1,

     

  },
 
  Text:{
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
  Text2:{
    color:'white',
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
  button:{
    backgroundColor:'red',
    height:30,
    width:150,
    marginTop:10,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center'
  
  },
  button2:{
    backgroundColor:'blue',
    height:30,
    width:200,
    marginTop:10,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center'
  
}
})