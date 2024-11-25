// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  const zeros: Array<{ xz: number; yz: number }> = [];

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      const cell = matrix[x][y];
      if (cell === 0) zeros.push({ xz: x, yz: y });
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    const { xz, yz } = zeros[i];
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix.length; y++) {
        if (x === xz || y === yz) {
          matrix[x][y] = 0;
        }
      }
    }
  }

  return matrix;
}
