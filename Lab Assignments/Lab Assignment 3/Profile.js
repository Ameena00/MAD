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
* @function Profile
**/
export const Profile = ({navigation}) => {

const { container } = styles
 return(
  
  <View style={container}>
    
  <Image style={{height:200,width:200,}} source={{uri:'https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png'}}></Image>  
  <text style={{fontSize: 40,fontWeight: 'bold'}}>Find your inspiration.</text>
  <text style={{fontSize: 20}}>Over 50+ billion pins to explore</text>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='   Your Nickname Please?'
  keyboardType='name-phone-pad'></TextInput>
  <text>Want a bussiness account ?</text>
  
  <View><TouchableOpacity style={styles.button}
   onPress={() => navigation.goBack()}
   >
    <Text style={styles.Text}>            Register Again</Text>
  </TouchableOpacity>
  
  </View>
  
 
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
    
    View2:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'row'
      
                         
    },
    
    View:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:30,
       width:200,
       padding:10,
       borderColor:'grey',
       borderWidth:3,
  
       borderRadius:30
  
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
      width:200,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
})
