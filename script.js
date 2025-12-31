function updateWaktu() {
    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = (60 - sekarang.getSeconds()).toString().padStart(2, '0');

    const tanggal = sekarang.getDate().toString().padStart(2, '0');
    const bulan = (sekarang.getMonth() + 1).toString().padStart(2, '0');
    const tahun = sekarang.getFullYear();

    const formatWaktu = `${jam}:${menit}:${detik} &nbsp;&nbsp; ${tanggal}/${bulan}/${tahun}`;

    document.getElementById('waktu').innerHTML = formatWaktu;
}

updateWaktu();
setInterval(updateWaktu, 1000);

const tahunSaatini = new Date().getFullYear();
document.getElementById("tahun").innerHTML = tahunSaatini;

const tahunsekarang = new Date().getFullYear();
const hasil = tahunsekarang - 2008;
document.getElementById("usia").innerHTML = hasil;
