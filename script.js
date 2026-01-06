function updateWaktu() {
    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, '0');
    const function updateWaktu() {
    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    
    // RUMUS: 60 dikurangi detik saat ini agar terlihat mundur
    // Jika detik sekarang 1, maka tampil 59. Jika detik sekarang 59, maka tampil 01.
    const detikMundur = (60 - sekarang.getSeconds()).toString().padStart(2, '0');
    
    const tanggal = sekarang.getDate().toString().padStart(2, '0');
    const bulan = (sekarang.getMonth() + 1).toString().padStart(2, '0');
    const tahun = sekarang.getFullYear();

    const formatWaktu = `${jam}:${menit}:${detikMundur} &nbsp;&nbsp; ${tanggal}/${bulan}/${tahun}`;

    document.getElementById('display-waktu').innerHTML = formatWaktu;
}

setInterval(updateWaktu, 1000);
updateWaktu();

function ig() {window.location.href = 'https://www.instagram.com/weeave3?igsh=ZGpldjgyNTRzdXE0';}
function wa() {window.location.href = 'https://wa.me/+6287722029327';}
function as() {window.location.href = 'https://ave-tech.github.io/Store/'}
function em() {window.location.href = 'mailto:akunutamawee@gmail.com';}
function yt() {window.location.href = 'https://youtube.com/@rock_solid_game?si=dcc4Zhy5J1nJJKMN';}

updateWaktu();
setInterval(updateWaktu, 1000);

const tahunSaatini = new Date().getFullYear();
document.getElementById("tahun").innerHTML = tahunSaatini;

const tahunsekarang = new Date().getFullYear();
const hasil = tahunsekarang - 2008;
document.getElementById("usia").innerHTML = hasil;
