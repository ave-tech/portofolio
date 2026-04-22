const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");

function card1() {
    item1.style.display = "block";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card2() {
    item1.style.display = "none";
    item2.style.display = "block";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card3() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "block";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card4() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "block";
    item5.style.display = "none";
}
function card5() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "block";
}

const cd = document.getElementById("cd");
const bb = document.getElementById("bb");
const pw = document.getElementById("pw");

function cpw() {
    cd.style.display = "none";
    bb.style.display = "none";
    pw.style.display = "block";
}
function cbb() {
    cd.style.display = "none";
    bb.style.display = "block";
    pw.style.display = "none";
}
function ccd() {
    cd.style.display = "block";
    bb.style.display = "none";
    pw.style.display = "none";
}

function order() {
    document.getElementById("wf").style.display = "block";
    document.getElementById("clo").style.display = "block";
}
function ttp() {
    document.getElementById("wf").style.display = "none";
    document.getElementById("clo").style.display = "none";
}

function ig() {window.location.href = 'https://www.instagram.com/ave_studio_official?igsh=MWRub2N6NDExZmt1Zw==';}
function wa() {window.location.href = 'https://wa.me/+6285881330296';}
function em() {window.location.href = 'mailto:contactavestudiocs@gmail.com';}
function goback() {window.history.back();}
function am() {document.getElementById("menu").style.display = "block";}
function cm() {document.getElementById("menu").style.display = "none";}
function layanan() {window.location.href = 'layanan.html';}

const area1 = document.getElementById("set1");
const area2 = document.getElementById("set2");
const area3 = document.getElementById("set3");
const area4 = document.getElementById('set4');
const area5 = document.getElementById("set5");
const area6 = document.getElementById("set6");
const area7 = document.getElementById("set7");
const area8 = document.getElementById('set8');
const area9 = document.getElementById('set9');

const bsatu = document.getElementById("bsatu");
const bdua = document.getElementById("bdua"); 
const btiga = document.getElementById("btiga");
const bempat = document.getElementById("bempat");
const blima = document.getElementById("blima");
const benam = document.getElementById("benam");
const btuju = document.getElementById("btuju");
const blapan = document.getElementById("blapan");
const bsembilan = document.getElementById("bsembilan");

const txt1 = document.getElementById("txt-ly1");
const txt2 = document.getElementById("txt-ly2");
const txt3 = document.getElementById("txt-ly3");
const txt4 = document.getElementById("txt-ly4");
const txt5 = document.getElementById("txt-ly5");
const txt6 = document.getElementById("txt-ly6");
const txt7 = document.getElementById("txt-ly7");
const txt8 = document.getElementById("txt-ly8");
const txt9 = document.getElementById("txt-ly9");

function isembilan() {
    bsembilan.setAttribute("onclick", "resembilan()");
    bsembilan.innerText = "Tutup"
    txt9.innerHTML = "buat permintaan apa saja yang anda ingin kan!<br>seuaikan kebutuhanmu dengan seleramu!";
    Object.assign(area9.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function resembilan() {
    bsembilan.setAttribute("onclick", "isembilan()")
    bsembilan.innerHTML = "More...";
    txt9.innerHTML = "custom request<br>klik untuk informasi selengkapnya:"
    Object.assign(area9.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function ilapan() {
    blapan.setAttribute("onclick", "relapan()");
    blapan.innerText = "Tutup"
    txt8.innerHTML = "pengen jadi programmer?<br>tapi bingung mau mulai dari mana?<br>pelajarin dulu dasar nya disini!<br>yang pastinya dijamin ga bingung sama materinya!";
    Object.assign(area8.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function relapan() {
    blapan.setAttribute("onclick", "ilapan()")
    blapan.innerHTML = "More...";
    txt8.innerHTML = "bimbel bahasa pemrogramana dasar<br>klik untuk informasi selengkapnya:"
    Object.assign(area8.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function ituju() {
    btuju.setAttribute("onclick", "retuju()");
    btuju.innerText = "Tutup"
    txt7.innerHTML = "pengen belajar bikin website tapi bingung mau belajar kayak gimana?<br>belajar disini aja!<br>dijamin penjelasan lebih mudah dimengerti seperti belajar dengan teman sendiri!";
    Object.assign(area7.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function retuju() {
    btuju.setAttribute("onclick", "ituju()")
    btuju.innerHTML = "More...";
    txt7.innerHTML = "bimbel web design<br>klik untuk informasi selengkapnya:"
    Object.assign(area7.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function ienam() {
    benam.setAttribute("onclick", "renam()");
    benam.innerText = "Tutup"
    txt6.innerHTML = "buat website mu sendiri dengan kebutuhan mu sendiri! dan yang pastinya harga termurah se dunia!";
    Object.assign(area6.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function renam() {
    benam.setAttribute("onclick", "ienam()")
    benam.innerHTML = "More...";
    txt6.innerHTML = "Pembuatan website<br>klik untuk informasi selengkapnya:"
    Object.assign(area6.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function ilima() {
    blima.setAttribute("onclick", "relima()");
    blima.innerText = "Tutup"
    txt5.innerHTML = "buat design seperti poster, iklan, gambarmu menjadi lebih menarik dan pastinya lebih keren!";
    Object.assign(area5.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function relima() {
    blima.setAttribute("onclick", "ilima()")
    blima.innerHTML = "More...";
    txt5.innerHTML = "Creative Design<br>klik untuk informasi selengkapnya:"
    Object.assign(area5.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function iempat() {
    bempat.setAttribute("onclick", "rempat()");
    bempat.innerText = "Tutup"
    txt4.innerHTML = "kouta internet lagi habis? tapi mager mau keluar rumah?<br>beli disini aja! dijamin proses cepat ga pake lama!<br>yuk! langsung isi kouta internet mu sekarang!";
    Object.assign(area4.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function rempat() {
    bempat.setAttribute("onclick", "iempat()")
    bempat.innerHTML = "More...";
    txt4.innerHTML = "beli Kouta Internet<br>klik untuk informasi selengkapnya:"
    Object.assign(area4.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function itiga() {
    btiga.setAttribute("onclick", "retiga()");
    btiga.innerText = "Tutup"
    txt3.innerHTML = "isi ulang pulsa anda sebelum nomor anda mati!<br>isi ulang disini dijamin termurah dan pastinya masa aktif sesuai nominal!";
    Object.assign(area3.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function retiga() {
    btiga.setAttribute("onclick", "itiga()")
    btiga.innerHTML = "More...";
    txt3.innerHTML = "Isi ulang pulsa<br>klik untuk informasi selengkapnya:"
    Object.assign(area3.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function idua() {
    bdua.setAttribute("onclick", "redua()");
    bdua.innerText = "Tutup"
    txt2.innerHTML = "Top-up segala macam dompet digital disini!<br>yang pastinya cepat, aman dan terpercaya!";
    Object.assign(area2.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function redua() {
    bdua.setAttribute("onclick", "idua()")
    bdua.innerHTML = "More...";
    txt2.innerHTML = "Top-up E-Wallet<br>klik untuk informasi selengkapnya:"
    Object.assign(area2.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}

function isatu() { 
    bsatu.setAttribute("onclick", "resatu()");
    bsatu.innerText = "Tutup";
    txt1.innerHTML = "lengkapi kebutuhan video game kamu<br> beli perlengkapan dan topup berbagai kebutuhan video game kamu dengan harga termurah, aman, terpercaya, dan terlengkap!<br>tunggu apalagi! langsung order sekarang!";
    Object.assign(area1.style, {
        width: "95%", height: "95%",
        fontSize: "20px",
    });
}
function resatu() {
    bsatu.setAttribute("onclick", "isatu()");
    bsatu.innerText = "More...";
    txt1.innerHTML = "Top-up Video Game<br>klik untuk informasi selengkapnya:"
    Object.assign(area1.style, {
        width: "35%", height: "400px",
        fontSize: "15px",
    });
}    themeBtn.setAttribute("onclick", "lightMode()");
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
