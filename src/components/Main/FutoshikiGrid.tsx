import { View, TextInput, Text, StyleSheet } from 'react-native'

type Cell = number
export interface Constraint { cell1: [number, number], cell2: [number, number] }
interface GridProps {
  grid: Cell[][]
  constraints: Constraint[]
}

export const FutoshikiGrid: React.FC<GridProps> = ({ grid, constraints }) => {
  const renderCell = (value: Cell, rowIndex: number, cellIndex: number) => (
    <TextInput
      key={`${rowIndex}-${cellIndex}`}
      style={styles.cell}
      defaultValue={value > 0 ? value.toString() : ''}
      keyboardType="numeric"
      editable={value === 0}
    />
  )

  const calculateConstraintPosition = (row1: number, col1: number, isHorizontal: boolean) => {
    if (isHorizontal) {
      return {
        left: CELL_SIZE + col1 * (CELL_SIZE + CONSTRAINT_SIZE),
        top: CELL_SIZE / 4 + row1 * (CELL_SIZE + CONSTRAINT_SIZE)
      }
    } else {
      return {
        left: CELL_SIZE / 4 + col1 * (CELL_SIZE + CONSTRAINT_SIZE),
        top: CELL_SIZE + row1 * (CELL_SIZE + CONSTRAINT_SIZE)
      }
    }
  }

  const renderConstraint = (constraint: Constraint) => {
    const { cell1, cell2 } = constraint
    const [row1, col1] = cell1
    const isHorizontal = row1 === cell2[0]

    const type = isHorizontal
      ? (col1 < cell2[1] ? '>' : '<')
      : (row1 < cell2[0] ? '>' : '<')

    const style = {
      ...styles.constraint,
      ...calculateConstraintPosition(row1, col1, isHorizontal),
      transform: isHorizontal ? [] : [{ rotate: '90deg' }]
    }

    return <Text style={style} key={`${row1}-${col1}-${type}`}>{type}</Text>
  }

  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => renderCell(cell, rowIndex, cellIndex))}
        </View>
      ))}
      {constraints.map(renderConstraint)}
    </View>
  )
}

const CELL_SIZE = 40
const CONSTRAINT_SIZE = CELL_SIZE / 2

const styles = StyleSheet.create({
  grid: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    marginBottom: CONSTRAINT_SIZE
  },
  cell: {
    borderWidth: 1,
    borderColor: '#333',
    width: CELL_SIZE,
    height: CELL_SIZE,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginRight: CONSTRAINT_SIZE,
    backgroundColor: '#fff'
  },
  constraint: {
    fontSize: 16,
    width: CONSTRAINT_SIZE,
    height: CONSTRAINT_SIZE,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    position: 'absolute'
  }
})
