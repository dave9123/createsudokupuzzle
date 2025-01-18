function shuffle<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isUnique(arr: Array<number>) {
    const nums = arr.filter((num) => num > 0);
    return new Set(nums).size === nums.length;
}

function isValid(grid: Array<Array<number>>, row: number, col: number, num: number) {
    const boxRow = Math.floor(row / 3) * 3, boxCol = Math.floor(col / 3) * 3;
    return !grid[row].includes(num) &&
           !grid.some((r) => r[col] === num) &&
           !grid.slice(boxRow, boxRow + 3).some((r) => r.slice(boxCol, boxCol + 3).includes(num));
}

function validate(puzzle: Array<Array<number>>) {
    if (puzzle.length !== 9) {
        throw new Error('Invalid puzzle size');
    } else if (
        puzzle.some(row => row.length !== 9) ||
        puzzle.some(row => row.some(cell => cell < 0 || cell > 9))
    ) {
        throw new Error('Invalid puzzle values');
    }
    for (let i = 0; i < 9; i++) {
        const row = puzzle.slice(i * 9, (i + 1) * 9);
        const col = puzzle.filter((_, idx) => idx % 9 === i);
        const box = puzzle.filter((_, idx) =>
            Math.floor(idx / 27) === Math.floor(i / 3) &&
            Math.floor((idx % 9) / 3) === i % 3
        );
        if (!isUnique(row) || !isUnique(col) || !isUnique(box)) return false;
    }
    return true;
}

function generate(blank: number = 0) {
    if (blank < 0 || blank > 81) {
        throw new Error('Invalid empty value');
    }
    const grid = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                shuffle(numbers);
                for (const number of numbers) {
                    if (isValid(grid, row, col, number)) {
                        grid[row][col] = number;
                        if (solve(grid)) {
                            return grid;
                        } else {
                            grid[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    while (blank > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (grid[row][col] !== 0) {
            grid[row][col] = 0;
            blank--;
        }
    }
}

function solve(puzzle: Array<Array<number>>) {
    if (puzzle.length !== 9) {
        throw new Error('Invalid puzzle size');
    } else if (
        puzzle.some(row => row.length !== 9) ||
        puzzle.some(row => row.some(cell => cell < 0 || cell > 9))
    ) {
        throw new Error('Invalid puzzle values');
    }
}

export { generate, solve, validate };