import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <>
    <StatusBar className='bg-red-200'/>
    <SafeAreaView className='flex-1 bg-red-200'>
    <View>
      <Text>login</Text>
      <View className='bg-red-400 w-10 h-10'>
        <Text
          className='text-red-200'>halo</Text>
      </View>
      

      
    </View>
    </SafeAreaView>
    </>
  )
}

export default login