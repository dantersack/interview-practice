// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = x + 1; y < matrix.length; y++) {
      const aux = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = aux;
    }
  }
  return matrix.map((row) => row.reverse());
}
