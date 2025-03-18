import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>login</Text>
      <View className='bg-red-400 w-10 h-10'>
        <Text
          className='text-red-200'>halo</Text>
      </View>
      

      
    </View>
    </SafeAreaView>
  )
}

export default login