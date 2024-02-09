import React from "react";
import { View } from "react-native";

import { Constraint, FutoshikiGrid } from "../components/Main/FutoshikiGrid";

const dummyData = {
  grid: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  constraints: [
    { cell1: [0, 0], cell2: [0, 1] },
    { cell1: [0, 1], cell2: [0, 2] },
    { cell1: [0, 2], cell2: [0, 3] },
    { cell1: [0, 4], cell2: [1, 4] },
    { cell1: [1, 4], cell2: [1, 3] },
    { cell1: [1, 1], cell2: [1, 0] },
    { cell1: [2, 4], cell2: [1, 4] },
    { cell1: [2, 3], cell2: [2, 4] },
    { cell1: [3, 3], cell2: [3, 2] },
    { cell1: [4, 4], cell2: [3, 4] },
  ] as Constraint[],
};

export const Main = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FutoshikiGrid
        initialGrid={dummyData.grid}
        constraints={dummyData.constraints}
      />
    </View>
  );
};
