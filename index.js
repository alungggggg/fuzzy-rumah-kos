const rk = [
    {
        namakos : "kos macan",
        harga   : 250000,
        jarak: 1000,
        fasilitas: 1
    },
    {
        namakos : "kos gajah",
        harga   : 500000,
        jarak: 500,
        fasilitas: 2
    },
    {
        namakos : "kos kuda",
        harga   : 500000,
        jarak: 100,
        fasilitas: 3
    },
    {
        namakos : "kos jerapah",
        harga   : 100000,
        jarak: 750,
        fasilitas: 2
    },
    {
        namakos : "kos sapi",
        harga   : 300000,
        jarak: 900,
        fasilitas: 2
    },
    {
        namakos : "kos spek nabi",
        harga   : 0,
        jarak: 0,
        fasilitas: 3
    }
]

// crisp
let kos = rk.map(stat => {
    let temp = {
        namakos:stat.namakos,
        harga:null,
        jarak:null,
        fasilitas:stat.fasilitas
    };
    // harga
    let harga = stat.harga/500000 * 100
    temp.harga = 100 - harga

    // jarak
    let jarak = stat.jarak/10000 * 100
    temp.jarak = 100 - jarak

    // fasilitas
    if(stat.fasilitas == 1){temp.fasilitas=60}else if(stat.fasilitas == 2){temp.fasilitas = 80}else if(stat.fasilitas == 3){temp.fasilitas = 100}else{temp.fasilitas = null}

    return temp;
})
console.log(kos)

// nilai tertinggi variable
const highestV = () => {
    let temp = {
        h:null,
        j:null,
        f:null
    };

    let harga = kos[0].harga;
    kos.forEach(element => {if(harga < element.harga){harga = element.harga}});
    temp.h = harga;

    let jarak = kos[0].jarak;
    kos.forEach(element => {if(jarak < element.jarak){jarak = element.jarak}});
    temp.j = jarak;

    let fasilitas = kos[0].fasilitas;
    kos.forEach(element => {if(fasilitas < element.fasilitas){fasilitas = element.fasilitas}});
    temp.f = fasilitas;

    return temp
}

console.log(highestV())

// normalisasi
kos = kos.map((element => {
    return {
        namakos : element.namakos,
        harga   : element.harga/highestV().h, 
        jarak   : element.jarak/highestV().j,
        fasilitas   :element.fasilitas/highestV().f
    }
}))
console.log(kos)

// nilai kriteria
// h=40%, j=35%, f=25%
// nilai bobot
kos = kos.map((element => {
    return {
        namakos : element.namakos,
        harga   : element.harga*40, 
        jarak   : element.jarak*35,
        fasilitas   :element.fasilitas*25,
        jumlah : element.harga*40+element.jarak*35+element.fasilitas*25
    }
}))

console.log(kos)

kos.sort(function(a, b){
    return b.jumlah - a.jumlah
});

console.log(kos)