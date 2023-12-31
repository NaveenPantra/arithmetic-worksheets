const GRID_COL_ROW_MAPPER = {
  1: {
    COLUMN: 9,
    ROW: 9,
  },
  2: {
    COLUMN: 9,
    ROW: 8,
  },
  3: {
    COLUMN: 9,
    ROW: 6,
  },
  4: {
    COLUMN: 9,
    ROW: 4,
  },
  5: {
    COLUMN: 9,
    ROW: 4,
  },
};

const OPERATORS_AND_SIZES = [
  {
    name: "Addition",
    sizes: [2, 3, 4, 5],
    symbol: "+",
    selectedSheetsCount: [0, 0, 0, 0],
  },
  {
    name: "Subtraction",
    symbol: "-",
    sizes: [1, 2, 3, 4, 5],
    selectedSheetsCount: [0, 0, 0, 0, 0],
  },
  {
    name: "Multiplication",
    symbol: "*",
    sizes: [1, 2, 3, 4, 5],
    selectedSheetsCount: [0, 0, 2, 0, 0],
  },
  {
    name: "Division",
    symbol: "/",
    sizes: [1, 2, 3],
    selectedSheetsCount: [0, 1, 0],
  },
  {
    name: "Percentage",
    symbol: "%",
    sizes: [1, 2, 3],
    selectedSheetsCount: [1, 0, 0],
  },
];

export { GRID_COL_ROW_MAPPER, OPERATORS_AND_SIZES };
