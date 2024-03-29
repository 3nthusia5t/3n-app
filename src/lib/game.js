
export class GameOfLife {
    //defining initial state
    constructor(rows, cols) {
      this.matrix = createMatrix(rows, cols);
    }


  }


function createMatrix(rows, cols) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < cols; j++) {
            // You can initialize the matrix elements with any desired values here
            matrix[i][j] = 0; // For example, initializing with zeros
        }
    }
    return matrix;
}

  