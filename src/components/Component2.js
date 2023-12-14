import { View, Text, Button } from 'react-native'
import React from 'react'

const Component2 = ({navigation}) => {
  return (
    <View>
      <Text>Component2</Text>
      <Button title='click and go component ' onPress={()=>{navigation.navigate('Skcrin1')}}></Button>
      
    </View>
  )
}

export default Component2