import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'native-base'

const Component1 = ({navigation}) => {
  return (
    <View>
      <Text style={{ marginTop:100}}>Component1</Text>
      
      
      <Button title='click and go component 2' onPress={()=>{navigation.navigate('Component2')}}></Button>
    </View>
  )
}

export default Component1