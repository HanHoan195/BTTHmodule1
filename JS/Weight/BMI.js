weight = prompt("Nhập cân nặng(kg):");
height = prompt("Nhập chiều cao(m):");
let canNang = parseFloat(weight);
let chieuCao = parseFloat(height);
let BMI = canNang / (chieuCao * chieuCao)
if (BMI < 18)
    document.write(BMI + ": Underweight!"  );
else if (BMI < 25.0)
    document.write(BMI + ": Normal!"  );
else if (BMI < 30.0)
    document.write(BMI + ": Overweight" );
else
    document.write(BMI + ": Obese"  ); 