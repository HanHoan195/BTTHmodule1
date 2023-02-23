let number = +prompt("Nhập số cần kiểm tra:");
isPrime()
function isPrime(number){    
    if (number <= 1){
        alert(`${number} không  phải số nguyên tố.`)
    } else {     
        for(let i =2;i <number-1;i++){
            if(number%i == 0){
                alert(`${number} không  phải số nguyên tố.`);
            } else {
                alert(`${number} là số nguyên tố.`);
            }
        }
    }
    
}