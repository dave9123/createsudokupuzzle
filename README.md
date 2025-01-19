# createSudoku

![Build and Test Workflow](https://github.com/dave9123/createSudoku/actions/workflows/ci.yml/badge.svg)

Generate, validate, and solve Sudoku puzzles easily!

# Documentation

## Table of Contents

-   [Installation](#installation)
-   [Functions](#functions)
    -   [findFirstEmpty](#findfirstempty)
    -   [validatePlacement](#validateplacement)
    -   [validate](#validate)
    -   [generate](#generate)
    -   [solve](#solve)
-   [Examples](#examples)

---

### Installation

This library is written in TypeScript. Add the functions to your project by copying the code or importing them into your project.

---

### Functions

#### `findFirstEmpty`

```ts
function findFirstEmpty(grid: Array<Array<number>>): [number, number] | false;
```

Finds the first empty cell in a Sudoku grid.

-   **Parameters**:

    -   `grid`: A 9x9 Sudoku grid represented as a 2D array.

-   **Returns**:

    -   A tuple `[row, col]` of the coordinates of the first empty cell.
    -   `false` if no empty cells are found.

-   **Example**:
    ```ts
    const grid = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        // more rows...
    ];
    console.log(findEmpty(grid)); // [0, 2]
    ```

---

#### `validatePlacement`

```ts
function validatePlacement(
    grid: Array<Array<number>>,
    row: number,
    col: number,
    num: number
): boolean;
```

Checks if placing a number in a cell is valid according to Sudoku rules.

-   **Parameters**:

    -   `grid`: The Sudoku grid (9x9 2D array).
    -   `row`: The row index where the number is to be placed.
    -   `col`: The column index where the number is to be placed.
    -   `num`: The number to place in the cell.

-   **Returns**:

    -   `true` if the placement is valid.
    -   `false` otherwise.

-   **Example**:
    ```ts
    const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        // more rows...
    ];
    console.log(validatePlacement(grid, 0, 2, 3)); // false
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
    ```ts
    const grid = [
        [
            [5, 3, 2, 6, 1, 4, 7, 8, 9],
            [6, 4, 9, 7, 8, 5, 1, 2, 3],
            [7, 8, 1, 3, 9, 2, 5, 6, 4],
            [9, 6, 5, 4, 7, 3, 2, 1, 8],
            [1, 2, 4, 8, 6, 9, 3, 5, 7],
            [3, 7, 8, 5, 2, 1, 9, 4, 6],
            [8, 5, 7, 1, 3, 6, 4, 9, 2],
            [2, 1, 3, 9, 4, 8, 6, 7, 5],
            [4, 9, 6, 2, 5, 7, 8, 3, 1],
        ],
    ];
    console.log(validate(grid)); // true
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
    ```ts
    const puzzle = generate(30);
    console.log(puzzle); // A grid with 30 blank cells
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
    ```ts
    const puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        // more rows...
    ];
    const solved = solve(puzzle);
    console.log(solved);
    ```

---

### Examples

```ts
import { generate, solve, validate, validatePlacement } from "createSudoku";

// Generate a puzzle with 40 blanks
const puzzle = generate(40);
console.log("Generated Puzzle:", puzzle);

// Validate the puzzle
console.log("Is the puzzle valid?", validate(puzzle));

// Solve the puzzle
const solution = solve(puzzle);
console.log("Solved Puzzle:", solution);
```

---

## License

This project is licensed under the GPLv3 License.
