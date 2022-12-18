import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'


/**
* @author
* @function Register
**/
export const Register = ({navigation}) => {

const { container } = styles
 return(
  <View style={container}>
    
  <Image style={{height:200,width:200,}} source={{uri:'https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png'}}></Image>  
  <Text style={{fontSize: 40,fontWeight: 'bold'}}>Welcome to Pinterest</Text>
 <text style={{fontSize: 20}} >Find new ideas to try</text>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Email'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='create Password'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Confirm Password'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Age'

  ></TextInput>
  
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text}>           Continue</Text>
  </TouchableOpacity>
 
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#ffffff',
     height:'100%',
     width:'100%'
    },
    
    View:{
      marginTop:"3%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:200,
       width:400,
       padding:10,
       borderColor:'grey',
       borderWidth:2,
  
       borderRadius:10
  
    },
    Text:{
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
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
    
    }
  
  })