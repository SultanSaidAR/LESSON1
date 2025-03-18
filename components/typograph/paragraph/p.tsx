import { View, Text } from 'react-native'
import React, { FC } from 'react'

interface pProps {
  children? : React.ReactNode;
  className? : string
}
const P : FC<pProps> = ({children,className}) => {
  return (
    <View className='py-[5px]'>
      <Text className={`text-[13px] text-[#64748B] ${className}`}>{children}</Text>
    </View>
  );
}

export default P