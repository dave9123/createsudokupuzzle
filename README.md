# sudokuPuzzle

![Build and Test Workflow](https://github.com/dave9123/sudokupuzzle/actions/workflows/ci.yml/badge.svg)

Generate, validate, and solve Sudoku puzzles easily!

## Documentation

### generate(blank)

Generates a Sudoku puzzle with a specified number of blank cells.

#### Parameters

-   `blank` (number, default=0): The number of blank cells in the generated puzzle (shows as 0). Must be between 0 and 81.

#### Returns

-   (Array<Array>): A generated 9x9 Sudoku grid.
    Generates a Sudoku puzzle with a specified number of blank cells and returns a generated Sudoku grid.

#### Error Handling

Throws an error if blank is not within the range [0, 81].

#### Usage Example

```ts
import { generate, solve, validate } from './sudoku';

// Generate a Sudoku puzzle with 30 blank cells
const puzzle = generate(30);
console.log('Generated Puzzle:', puzzle);

// Validate the generated puzzle
const isValidPuzzle = validate(puzzle, true);
console.log('Is the puzzle valid?', isValidPuzzle);

// Solve the puzzle
try {
    const solution = solve(puzzle);
    console.log('Solved Puzzle:', solution);
} catch (error) {
    console.error('Error:', error.message);
}
```