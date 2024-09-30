for(var i = 0; i < 10; i++){
    console.log(i);
}

for(var i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

let array1 = [1,2,3,4,5,6]
console.log(array1[5])

let array2 = [5,2,4,1,3,5]
console.log(array2.sort())

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for(let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}

let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
console.log(kalimat.join(" "))

var sayuran=[]
sayuran.push("Kangkung",
    "Bayam",
    "Buncis",
    "Kubis",
    "Timun",
    "Seledri",
    "Tauge")
console.log(sayuran)