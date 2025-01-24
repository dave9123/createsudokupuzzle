# createsudokupuzzle

[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()
[![NPM Version](https://img.shields.io/npm/l/createsudokupuzzle.svg?style=flat)](https://github.com/dave9123/createsudokupuzzle/blob/main/LICENSE)

Generate, validate, and solve Sudoku puzzles easily!

# Documentation

## Table of Contents

-   [Installation](#installation)
-   [Functions](#functions)
    -   [findFirstEmpty](#findfirstempty)
    -   [findAllEpty](#findallempty)
    -   [validatePlacement](#validateplacement)
    -   [validate](#validate)
    -   [generate](#generate)
    -   [solve](#solve)
-   [Examples](#examples)

---

### Installation

NPM <code>npm install createsudokupuzzle</code>

Yarn <code>yarn add createsudokupuzzle</code>

Bun <code>bun add createsudokupuzzle</code>

PNPM <code>pnpm add createsudokupuzzle</code>

---

### Functions

#### `findFirstEmpty`

```ts
function findFirstEmpty(grid: Array<Array<number>>): [number, number] | [];
```

Finds the first empty cell in a Sudoku grid.

-   **Parameters**:

    -   `grid`: A 9x9 Sudoku grid represented as a 2D array.

-   **Returns**:

    -   A tuple `[row, col]` of the coordinates of the first empty cell.
    -   `false` if no empty cells are found.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ];

    console.log(sudoku.findFirstEmpty(grid)); // [ 0, 3 ]
    ```
    -   JS:
    ```js
    const sudoku = require("createsudokupuzzle");

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ];

    console.log(sudoku.findFirstEmpty(grid)); // [ 0, 3 ]
    ```

---

#### `findAllEmpty`

```ts
function findAllEmpty(grid: Array<Array<number>>): [number, number][];
```

Finds all empty cells in a Sudoku grid.

-   **Parameters**:

    -   `grid`: A 9x9 Sudoku grid represented as a 2D array.

-   **Returns**:

    -   An array of tuples [row, col], each representing the coordinates of an empty cell or an empty array if no empty cells are found.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ];

    console.log(sudoku.findAllEmpty(grid)); // [[ 0, 3 ], [ 0, 5 ], [ 0, 6 ], [ 1, 2 ], [ 1, 5 ], [ 1, 7 ], [ 1, 8 ], [ 2, 8 ], [ 3, 3 ], [ 3, 5 ], [ 4, 5 ], [ 4, 7 ], [ 5, 0 ], [ 5, 2 ], [ 5, 3 ], [ 5, 5 ], [ 7, 1 ], [ 7, 3 ], [ 7, 4 ], [ 7, 8 ]]
    ```
    -   JS:
    ```js
    const sudoku = require("createsudokupuzzle");

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ];

    console.log(sudoku.findAllEmpty(grid)); // [[ 0, 3 ], [ 0, 5 ], [ 0, 6 ], [ 1, 2 ], [ 1, 5 ], [ 1, 7 ], [ 1, 8 ], [ 2, 8 ], [ 3, 3 ], [ 3, 5 ], [ 4, 5 ], [ 4, 7 ], [ 5, 0 ], [ 5, 2 ], [ 5, 3 ], [ 5, 5 ], [ 7, 1 ], [ 7, 3 ], [ 7, 4 ], [ 7, 8 ]]
    ```

---

#### `validatePlacement`

```ts
function validatePlacement(
    grid: Array<Array<number>>,
    row: number,
    col: number,
    num: number,
    outputReason?: boolean
): { valid: boolean, reason?: string } | boolean;
```

Checks if placing a number in a cell is valid according to Sudoku rules.

-   **Parameters**:

    -   `grid`: The Sudoku grid (9x9 2D array).
    -   `row`: The row index where the number is to be placed.
    -   `col`: The column index where the number is to be placed.
    -   `num`: The number to place in the cell.
    -   `outputReason` (optional): Whether to output the reason for invalid placement.

-   **Returns**:

    -    If `outputReason` is `true`, returns an object with:
        -   `valid`: `true` if the placement is valid, `false` otherwise.
        -   `reason`: A string providing the reason if the placement is invalid.
    - If `outputReason` is `false` or not provided, returns a boolean:     
        -   `true` if the placement is valid.
        -   `false` otherwise.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ]

    console.log(sudoku.validatePlacement(puzzle, 0, 0, 1)); // false
    ```
    -   JS:
    ```ts
    const sudoku = require("createsudokupuzzle");

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ]

    console.log(sudoku.validatePlacement(puzzle, 0, 0, 1)); // false
    ```

---

#### `validate`

```ts
function validate(
    puzzle: Array<Array<number>>,
    allowZero: boolean = false
): boolean;
```

Validates if a Sudoku grid satisfies Sudoku rules.

-   **Parameters**:

    -   `puzzle`: A 9x9 Sudoku grid represented as a 2D array.
    -   `allowZero`: If `true`, zeros are allowed in the grid.

-   **Returns**:

    -   `true` if the grid is valid.
    -   `false` otherwise.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ]

    console.log(sudoku.validate(puzzle, true)); // true
    ```
    -   JS:
    ```js
    const sudoku = require("createsudokupuzzle");

    const grid = [
        [ 5, 1, 7, 0, 4, 0, 0, 3, 6 ],
        [ 9, 6, 0, 3, 8, 0, 1, 0, 0 ],
        [ 3, 8, 2, 6, 7, 1, 5, 4, 0 ],
        [ 1, 7, 6, 0, 3, 0, 2, 5, 8 ],
        [ 4, 5, 9, 1, 2, 0, 3, 0, 7 ],
        [ 0, 3, 0, 0, 5, 0, 9, 1, 4 ],
        [ 6, 9, 5, 8, 1, 7, 4, 2, 3 ],
        [ 8, 0, 3, 0, 0, 4, 7, 9, 0 ],
        [ 7, 4, 1, 2, 9, 3, 6, 8, 5 ]
    ]

    console.log(sudoku.validate(puzzle, true)); // true
    ```

---

#### `generate`

```ts
function generate(blank: number = 0): Array<Array<number>>;
```

Generates a Sudoku puzzle with a specified number of blank cells.

-   **Parameters**:

    -   `blank`: The number of blank cells (0-81).

-   **Returns**:

    -   A 9x9 Sudoku grid with the specified number of blank cells.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = sudoku.generate(30);

    console.log(grid); // [[6, 5, 9, 8, 0, 0, 2, 3, 7], [4, 2, 0, 0, 0, 7, 8, 0, 9], [0, 8, 3, 9, 6, 2, 0, 0, 5], [2, 4, 0, 7, 3, 9, 0, 1, 6], [0, 0, 0, 6, 0, 4, 0, 2, 8], [3, 1, 6, 2, 8, 0, 9, 7, 4], [5, 0, 7, 0, 0, 6, 0, 0, 2], [0, 0, 0, 5, 2, 0, 7, 0, 1], [0, 0, 2, 4, 7, 8, 6, 0, 3]];
    ```
    -   JS:
    ```js
    const sudoku = require("createsudokupuzzle");

    const grid = sudoku.generate(30);

    console.log(grid); // [[6, 5, 9, 8, 0, 0, 2, 3, 7], [4, 2, 0, 0, 0, 7, 8, 0, 9], [0, 8, 3, 9, 6, 2, 0, 0, 5], [2, 4, 0, 7, 3, 9, 0, 1, 6], [0, 0, 0, 6, 0, 4, 0, 2, 8], [3, 1, 6, 2, 8, 0, 9, 7, 4], [5, 0, 7, 0, 0, 6, 0, 0, 2], [0, 0, 0, 5, 2, 0, 7, 0, 1], [0, 0, 2, 4, 7, 8, 6, 0, 3]];
    ```

---

#### `solve`

```ts
function solve(puzzle: Array<Array<number>>): Array<Array<number>>;
```

Solves a Sudoku puzzle using backtracking.

-   **Parameters**:

    -   `puzzle`: A 9x9 Sudoku grid represented as a 2D array.

-   **Returns**:

    -   A solved 9x9 Sudoku grid.

-   **Example**:
    -   TS:
    ```ts
    import * as sudoku from "createsudokupuzzle";

    const grid = [
        [ 0, 9, 4, 0, 5, 6, 3, 0, 2 ],
        [ 1, 2, 3, 0, 8, 0, 5, 0, 0 ],
        [ 0, 0, 8, 2, 4, 3, 9, 1, 7 ],
        [ 4, 0, 9, 5, 1, 2, 0, 3, 6 ],
        [ 2, 7, 5, 0, 6, 0, 1, 4, 0 ],
        [ 6, 0, 0, 8, 7, 4, 2, 0, 5 ],
        [ 8, 1, 7, 4, 3, 5, 6, 2, 9 ],
        [ 9, 4, 0, 7, 2, 1, 8, 5, 3 ],
        [ 3, 5, 2, 6, 9, 8, 0, 7, 0 ]
    ];

    const solved = sudoku.solve(puzzle);
    console.log(solved);
    ```
    -   JS:
    ```js
    const sudoku = require("createsudokupuzzle");

    const grid = [
        [ 0, 9, 4, 0, 5, 6, 3, 0, 2 ],
        [ 1, 2, 3, 0, 8, 0, 5, 0, 0 ],
        [ 0, 0, 8, 2, 4, 3, 9, 1, 7 ],
        [ 4, 0, 9, 5, 1, 2, 0, 3, 6 ],
        [ 2, 7, 5, 0, 6, 0, 1, 4, 0 ],
        [ 6, 0, 0, 8, 7, 4, 2, 0, 5 ],
        [ 8, 1, 7, 4, 3, 5, 6, 2, 9 ],
        [ 9, 4, 0, 7, 2, 1, 8, 5, 3 ],
        [ 3, 5, 2, 6, 9, 8, 0, 7, 0 ]
    ];

    const solved = sudoku.solve(puzzle);
    console.log(solved);
    ```

---

### Examples

TS:
```ts
import { generate, solve, validate, validatePlacement } from "createsudokupuzzle";

// Generate a puzzle with 40 blanks
const puzzle = generate(40);
console.log("Generated Puzzle:", puzzle);

// Validate the puzzle
console.log("Is the puzzle valid?", validate(puzzle));

// Solve the puzzle
const solution = solve(puzzle);
console.log("Solved Puzzle:", solution);

// Validate the solved puzzle
console.log("Is the solved puzzle valid?", validate(solution));

// Validate move
console.log("Is setting [0][0] to 1 valid?", validatePlacement(solution, 0, 0, 1));
```
JS:
```js
const sudoku = require("createsudokupuzzle");

// Generate a puzzle with 40 blanks
const puzzle = sudoku.generate(40);
console.log("Generated Puzzle:", puzzle);

// Validate the puzzle
console.log("Is the puzzle valid?", sudoku.validate(puzzle));

// Solve the puzzle
const solution = sudoku.solve(puzzle);
console.log("Solved Puzzle:", solution);

// Validate the solved puzzle
console.log("Is the solved puzzle valid?", sudoku.validate(solution));

// Validate move
console.log("Is setting [0][0] to 1 valid?", sudoku.validatePlacement(solution, 0, 0, 1))
```

---

## License

This project is licensed under the MIT License.
