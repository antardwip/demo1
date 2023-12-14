import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const HomeScrin = ({navigation}) => {
      
  return (
    <View style={{flex:1}}>
      <Text style={{ marginTop:100}}>HomeScrin</Text>
      <Button title='click and go component 1' onPress={()=>{navigation.navigate('Component1')}}></Button>
    </View>
  )
}

export default HomeScrin

const styles = StyleSheet.create({})