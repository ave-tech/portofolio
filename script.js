function updateWaktu() {
    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = (60 - sekarang.getSeconds()).toString().padStart(2, '0');

    const tanggal = sekarang.getDate().toString().padStart(2, '0');
    const bulan = (sekarang.getMonth() + 1).toString().padStart(2, '0');
    const tahun = sekarang.getFullYear();

    const formatWaktu = `${jam}:${menit}:${detik} &nbsp;&nbsp; ${tanggal}/${bulan}/${tahun}`;

    document.querySelector('.waktu').innerHTML = formatWaktu;
}

updateWaktu();
setInterval(updateWaktu, 1000);

//const tahunSaatini = new Date().getFullYear();
//document.getElementById("tahun").innerHTML = tahunSaatini;

//const tahunsekarang = new Date().getFullYear();
//const hasil = tahunsekarang - 2008;
//document.getElementById("usia").innerHTML = hasil;

const themeBtn = document.getElementById("theme-mode-btn");

const text = document.getElementById("text");
const textHijau = document.getElementById("text-ijo");

const body = document.getElementById("body");
const menuLines = document.querySelectorAll(".menu-line");

//dark mode
function darkMode() {
    themeBtn.setAttribute("onclick", "lightMode()");
    body.style.backgroundColor = "black";
    text.style.color = "white";
    textHijau.style.color = "yellow";

    menuLines.forEach(line => {
        line.style.backgroundColor = "white";
    });
}

//light mode
function lightMode() {
    console.log("true");
}
