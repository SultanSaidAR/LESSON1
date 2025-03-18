import { View, Text } from 'react-native'
import React, { Children, FC, ReactNode } from 'react'

interface h1 {
  children: ReactNode,
  className? : string
}

const H1 : FC<h1> = ({children,className}) => {
  return (
    <View className=''>
      <Text className={`text-[18px] font-[600] ${className}`}>{children}</Text>
    </View>
  )
}

export default H1