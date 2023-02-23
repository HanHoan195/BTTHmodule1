// Luyện tập viết hàm:
// let arr =[3,6,8,5,4];

// 1. Hàm tính tổng các giá trị trong mảng:

// let arr = [3, 6, 8, 5, 4];
// let sum = 0;
// function sumArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     } 

// }
// sumArray(arr)
// console.log(sum);


// 2. Hàm hiển thị các số chẵn trong mảng:

// let arr = [3, 6, 8, 5, 4];
// let even = 0;
// function evenNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]%2 == 0){
//            even = arr[i];
//            console.log(even);
//         } 
//     } 
// } 
// evenNumber(arr)


// 3. Hàm hiển thị các số nguyên tố của mảng:

let arr = [3, 6, 8, 5, 4];
function checkPrime(number){
    if(number<=1){
        // console.log(`${number} không phải là số nguyên tố`);
        return false;
    }else{
        let prime = true;
        for(let i=2;i<number-1;i++){
            if(number%i==0){
                prime = false;
                break;
            }
        }
        if(prime==true){
            // console.log(`${number} là số nguyên tố`);
            return true;
        }else{
            // console.log(`${number} không phải là số nguyên tố`);
            return false;
        }
    }
}


// 4. Hàm tìm giá trị lớn nhất của mảng:
// let arr = [3, 6, 8, 5, 4];
// let max = arr[0];
// function maxInArray() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
// }
// maxInArray(arr)
// console.log(max);


// 5. Hàm tìm giá trị bé nhất của mảng:

// let arr = [3, 6, 8, 5, 4];
// let min = arr[0];
// function minInArray() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
// }
// minInArray(arr)
// console.log(min);


// 6. Hàm nối 1 mảng khác:
// let arr = [3, 6, 8, 5, 4];
// let arr2 = [2,7,1];
// let arr3 = [];
// function conArray(){
//     arr3 = arr.concat(arr2);
// }
// conArray(arr);
// console.log(arr3);

// 7. Hàm đảo ngược mảng:
// let arr=[1,2,3,4,5];
// function revArray(){
//     arr.reverse();
// }
// revArray(arr);
// console.log(arr);


// 8. Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào:
// let arr = [3, 6, 8, 5, 4];
// let arr2 = [2,];
// let arr3 = []
// function joinArray() {
//     arr3 = arr.join(arr2);
// }
// joinArray(arr);
// console.log(arr3);

// 9. Hàm tìm vị trí của một số trong mảng, nếu không tìm thấy trả về -1:
// let arr = [3, 6, 8, 5, 4];
// let num = 1;
// function findArray(){
//     let result = arr.includes(num);
//     if (result == true){
//         console.log(result);
//     } else {
//         console.log(-1);
//     }
// } 
// findArray(arr);
    


// 10.Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng :
// let arr = [3, 6, 8, 5, 4];
// function pushArray(){
//     arr.push("abc");
// }
// pushArray(arr);
// console.log(arr);
