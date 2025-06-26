import { StyleSheet, Text, View ,TouchableOpacity, ImageBackground, Image} from 'react-native'
import React from 'react'
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler'

export default function Profile({navigation}) {
  return (
    <View>
      
      <View style={styles.dp}>

<Image source={{uri:"https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
      </View>
      <View style={styles.dpside}>
      <Text style={styles.name}>ayshasm</Text>
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.p}>
        <Text style={styles.button}>Follow</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={()=>navigation.navigate("Update")} style={styles.p}>
        <Text style={styles.button}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("View")} style={styles.p}>
        <Text style={styles.button}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Edit")} style={styles.p}>
        <Text style={styles.button}>Edit</Text>
      </TouchableOpacity> */}
      </View>
      <Text style={styles.text}><strong>105</strong> posts        <strong>13k</strong> followers       <strong>14k</strong> following</Text>
      <Text style={styles.user}><strong>Aysha Sariya.</strong>   Software Developer </Text>
      <Text style={styles.link}>www.software.com</Text>
    
      </View>
      <View style={styles.story}>
        <view style={styles.stories}> 
        <Image source={{uri:"https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}} style={styles.image}/>
         </view>
        <view style={styles.stories}>  
        <Image source={{uri:"https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}}  style={styles.image}/>
          </view>
        <view style={styles.stories}>
          <Image source={{uri:"https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}}  style={styles.image}/> 
          </view>
        <view style={styles.stories}> 
        <Image source={{uri:"https://images.unsplash.com/photo-1498814117408-e396f5507073?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/> 
         </view>
        <view style={styles.stories}>
          <Image source={{uri:"https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}} style={styles.image}/> 
            </view>
        <view style={styles.stories}>
          <Image source={{uri:"https://images.unsplash.com/photo-1587471577460-bdb4891711ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}} style={styles.image}/> 
            </view>

      

      </View>
      <View style={styles.feed}>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1492950103599-127d2be251b7?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
      </View>
      <View style={styles.feed}>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1498814117408-e396f5507073?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
      </View>
      <View style={styles.feed}>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1587471577460-bdb4891711ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
<View style={styles.post}>
  <Image source={{uri:"https://images.unsplash.com/photo-1492950103599-127d2be251b7?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={styles.image}/>
</View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '100%',
   
},
buttons:{
flexDirection:'row',
width:500,
height:50,
left:120,
top:0,
position:'absolute',

},
p:{
 

  backgroundColor:"#3876BF",
  padding:10,
  
  justifyContent:"center",
  alignItems:"center",
  height:30,
  width:80,
  margin:5,
  
  
  borderRadius:3,
 borderColor:"grey"
},
  post:{
backgroundColor:"pink",
height:350,
width:270,
margin:30,
  },
  feed:{
    flexDirection:"row",

height:400,
width:1000,

left:300,
top:300,
  },
  stories:{
height:100,
width:100,
margin:30,
borderRadius:100,
backgroundColor:"pink",
overflow:'hidden',


  },
  story:{
    flexDirection:"row",
width:1000,
height:150,

position:'absolute',
left:300,
top:260,
alignSelf:'center',
  },
  link:{
color:"blue",
top:120,
position:'absolute',
  },
  user:{
position:'absolute',
top:100,
  },
  text:{
top:50,
position:'absolute',
  },
  dp:{
   
    borderRadius:100,
    width:150,
    height:150,
    left:300,
    top:80,
    overflow:'hidden',
  },
  dpside:{
    position:'absolute',
    
    width:500,
    height:200,
    left:500,
    top:80,
  },
  name:{
   
    fontSize:25,
  },
  
button:{
  color:"white",
  }


})