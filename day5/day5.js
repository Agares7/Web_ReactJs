function cetakFunction(params) {
    console.log("nama saya " + params)
}

cetakFunction("Ardhian")

function myFunction(params1, params2) {
    return params1 + params2
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output)

const Hello = () => {
    return "Hello";
}

let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}
console.log(obj.bahasa)

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobby : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3] 
}
console.log(objDaftarPeserta)

let objBuah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: false, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
];

var objBuahFilter = objBuah.filter(function(item){
    return item.adaBijinya == false
})

console.log(objBuahFilter)

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }

const {name, brand, year} = phone

console.log(phone)

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {...dataBukuTambahan, buku}
  
  console.log(objOutput) 

  let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
    }
    
    const functionObject = (param) => {
    
    return param
    
    }

console.log(functionObject(mobil))