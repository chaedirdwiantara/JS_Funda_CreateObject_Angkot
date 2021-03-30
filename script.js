// membuat object angkot dengan menggunakan metode pemanggilan Constructor
// metode constructor digunakan agar lebih memudahkan untuk menambah banyak object baru

function Angkot(sopir, rute, penumpang, kas) {
  this.sopir = sopir;
  this.rute = rute;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('angkot masih kosong masbro');
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot('Sandy', ['bone', 'soppeng'], [], 0);
let angkot2 = new Angkot('Patrick', ['bone', 'kolaka'], [], 0);
