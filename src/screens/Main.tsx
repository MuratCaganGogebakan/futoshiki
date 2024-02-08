import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Constraint, FutoshikiGrid } from '../components/Main/FutoshikiGrid'

const dummyData = {
  grid: [
    [5, 0, 0, 0, 0],
    [0, 0, 3, 0, 0],
    [0, 4, 0, 0, 0],
    [0, 0, 0, 2, 0],
    [0, 0, 0, 0, 1]
  ],
  constraints: [
    { cell1: [0, 0], cell2: [1, 0] },
    { cell1: [1, 2], cell2: [1, 3] },
    { cell1: [2, 1], cell2: [2, 2] },
    { cell1: [3, 3], cell2: [3, 4] },
    { cell1: [4, 3], cell2: [4, 4] },
    { cell1: [1, 0], cell2: [2, 0] },
    { cell1: [2, 2], cell2: [3, 2] },
    { cell1: [3, 1], cell2: [4, 1] }
  ] as Constraint[]
}

export const Main = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FutoshikiGrid initialGrid={dummyData.grid} constraints={dummyData.constraints} />
    </View>
  )
}
