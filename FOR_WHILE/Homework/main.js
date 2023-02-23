let matrix = [
    [3,1,5,4],
    [2,7,1,8],
    [3,5,1,6],
    [1,2,1,2]
]
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j <matrix[i].length; j++) {
       sum += matrix[i][j];
    }
}
console.log(sum);

// tính tổng tam giác trên ph:


