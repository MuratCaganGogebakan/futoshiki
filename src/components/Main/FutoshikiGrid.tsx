import { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { CustomText } from "../CustomText";

type Cell = number;
export interface Constraint {
  cell1: [number, number];
  cell2: [number, number];
}
interface GridProps {
  initialGrid: Cell[][];
  constraints: Constraint[];
}

export const FutoshikiGrid: React.FC<GridProps> = ({
  initialGrid,
  constraints,
}) => {
  const [grid, setGrid] = useState<Cell[][]>(initialGrid); // Manage grid state
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );

  const onCellUpdate = (rowIndex: number, cellIndex: number, value: number) => {
    const newGrid = grid.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((cell, cIndex) => (cIndex === cellIndex ? value : cell));
      }
      return row;
    });
    setGrid(newGrid);
  };

  const renderCell = (value: Cell, rowIndex: number, cellIndex: number) => {
    const isSelected =
      selectedCell &&
      selectedCell[0] === rowIndex &&
      selectedCell[1] === cellIndex;
    return (
      <Pressable
        key={`${rowIndex}-${cellIndex}`}
        style={[styles.cell, isSelected && styles.selectedCell]}
        onPress={() => setSelectedCell([rowIndex, cellIndex])}
      >
        <CustomText weight="bold">
          {value > 0 ? value.toString() : ""}
        </CustomText>
      </Pressable>
    );
  };

  const renderNumberSelector = () => {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <View style={styles.numberSelector}>
        {numbers.map((number) => (
          <Pressable
            key={number}
            style={styles.number}
            onPress={() => {
              if (selectedCell) {
                onCellUpdate(selectedCell[0], selectedCell[1], number);
                setSelectedCell(null);
              }
            }}
          >
            <CustomText weight="bold">{number.toString()}</CustomText>
          </Pressable>
        ))}
      </View>
    );
  };

  const calculateConstraintPosition = (
    row1: number,
    col1: number,
    isHorizontal: boolean,
  ) => {
    if (isHorizontal) {
      return {
        left: CELL_SIZE + col1 * (CELL_SIZE + CONSTRAINT_SIZE),
        top: CELL_SIZE / 4 + row1 * (CELL_SIZE + CONSTRAINT_SIZE),
      };
    } else {
      return {
        left: CELL_SIZE / 4 + col1 * (CELL_SIZE + CONSTRAINT_SIZE),
        top: CELL_SIZE + row1 * (CELL_SIZE + CONSTRAINT_SIZE),
      };
    }
  };

  const renderConstraint = (constraint: Constraint) => {
    const { cell1, cell2 } = constraint;
    const [row1, col1] = cell1;
    const isHorizontal = row1 === cell2[0];

    const type = isHorizontal
      ? col1 < cell2[1]
        ? ">"
        : "<"
      : row1 < cell2[0]
        ? ">"
        : "<";

    const style = {
      ...styles.constraint,
      ...calculateConstraintPosition(row1, col1, isHorizontal),
      transform: isHorizontal ? [] : [{ rotate: "90deg" }],
    };

    return (
      <CustomText weight="bold" style={style} key={`${row1}-${col1}-${type}`}>
        {type}
      </CustomText>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) =>
              renderCell(cell, rowIndex, cellIndex),
            )}
          </View>
        ))}
        {constraints.map(renderConstraint)}
      </View>
      {renderNumberSelector()}
    </View>
  );
};

const CELL_SIZE = 40;
const CONSTRAINT_SIZE = CELL_SIZE / 2;

const styles = StyleSheet.create({
  container: {},
  grid: {
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: CONSTRAINT_SIZE,
  },
  cell: {
    borderWidth: 1,
    borderColor: "#333",
    width: CELL_SIZE,
    height: CELL_SIZE,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginRight: CONSTRAINT_SIZE,
    backgroundColor: "#fff",
  },
  constraint: {
    fontSize: 16,
    width: CONSTRAINT_SIZE,
    height: CONSTRAINT_SIZE,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    position: "absolute",
  },
  selectedCell: {
    backgroundColor: "lightblue",
  },
  numberSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  number: {
    padding: 10,
    borderColor: "#333",
  },
});
