import { generate, solve, validate } from '../src/index';

describe('Sudoku Functions', () => {
    test('should generate a valid Sudoku grid', () => {
        const puzzle = generate(20);
        expect(puzzle).toHaveLength(9);
        expect(puzzle.every(row => row.length === 9)).toBe(true);
        expect(validate(puzzle, true)).toBe(true);
    });

    test('should solve a valid Sudoku puzzle', () => {
        const puzzle = generate(20);
        const solved = solve(puzzle);
        expect(validate(solved)).toBe(true);
    });

    test('should validate a Sudoku grid correctly', () => {
        const validPuzzle = generate(0);
        expect(validate(validPuzzle)).toBe(true);

        // Invalid grid example (two of the same number in the same row)
        const invalidPuzzle = [...validPuzzle];
        invalidPuzzle[0][1] = validPuzzle[0][0];
        expect(validate(invalidPuzzle)).toBe(false);
    });

    test("should throw an error if the puzzle is unsolvable", () => {
        expect(() => solve([
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
});