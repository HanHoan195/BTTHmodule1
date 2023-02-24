 //prompt("Nhập tên 1 ngôi sao:");
let star = ["Polaris", "Aldebaran", "Deneb", "Altair", "Vega", "Dubhe", "Regulus"];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function checkStar(name) {
    let indexStar = 0;   
    for (let i = 0; i < star.length; i++) {
        if (name == star[i]) {
            indexStar = i;
            for (j = 0; j < constellation.length; j++) {
                if (indexStar == j) {
                   console.log(constellation[j]);
                   return;                    
                } else {
                    console.log("Không tìm thấy");
                }
            }
        } else {
            console.log("Không tìm thấy.");
            break;
        }
    }
}
let name = "Deneb";
checkStar(name);