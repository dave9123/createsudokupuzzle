import sudoku from '../src/index';

describe('Sudoku Functions', () => {
    test('should generate a valid Sudoku grid', () => {
        const puzzle = sudoku.generate(20);
        expect(puzzle).toHaveLength(9);
        expect(puzzle.every(row => row.length === 9)).toBe(true);
        expect(puzzle.flat().every(num => num >= 0 && num <= 9)).toBe(true);
        expect(sudoku.validate(puzzle, true)).toBe(true);
    });

    test('should solve a valid Sudoku puzzle', () => {
        expect(sudoku.validate(sudoku.solve(sudoku.generate(20)))).toBe(true);
    });

    test('should validate a Sudoku grid correctly', () => {
        const validPuzzle = sudoku.generate(0);
        expect(sudoku.validate(validPuzzle)).toBe(true);

        // Invalid grid example (two of the same number in the same row)
        const invalidPuzzle = [...validPuzzle];
        invalidPuzzle[0][1] = validPuzzle[0][0];
        expect(sudoku.validate(invalidPuzzle)).toBe(false);
    });

    test("should throw an error if the puzzle is unsolvable", () => {
        expect(() => sudoku.solve([
            [5, 5, 6, 8, 4, 9, 7, 3, 2],
            [3, 0, 7, 6, 0, 5, 0, 0, 0],
            [8, 0, 9, 7, 0, 0, 0, 6, 5],
            [1, 3, 5, 0, 6, 0, 9, 0, 7],
            [4, 7, 2, 5, 9, 1, 0, 0, 6],
            [9, 6, 8, 3, 7, 0, 0, 5, 0],
            [2, 5, 3, 1, 8, 6, 0, 7, 4],
            [6, 8, 4, 2, 5, 7, 0, 0, 0],
            [7, 9, 1, 0, 3, 4, 6, 0, 0]
        ])).toThrow(Error);
    });

    test("should find all empty cells correctly", () => {
        expect(sudoku.findAllEmpty(sudoku.generate(5)).length).toBe(5);
    });

    test("should find the first empty cell correctly", () => {
        expect(sudoku.findFirstEmpty(sudoku.generate(0)).length).toBe(0);
    });
});