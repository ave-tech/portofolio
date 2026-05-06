function updateWaktu() {
    const sekarang = new Date();

    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = (60 - sekarang.getSeconds()).toString().padStart(2, '0');

    //const tanggal = sekarang.getDate().toString().padStart(2, '0');
    //const bulan = (sekarang.getMonth() + 1).toString().padStart(2, '0');
    //const tahun = sekarang.getFullYear();
    const formatWaktu = `${jam}:${menit}:${detik}`;

    document.querySelector('.waktu').innerHTML = formatWaktu;
}

updateWaktu();
setInterval(updateWaktu, 1000);

const tahunSaatini = new Date().getFullYear();
//document.getElementById("tahun").innerHTML = tahunSaatini;

const tahunsekarang = new Date().getFullYear();
const hasil = tahunsekarang - 2008;
document.querySelector(".umur").innerHTML = "saya,<br>berumur <b>" + hasil + "</b> <sup>tahun</sup>";

const mbg = document.querySelector(".main-bg");
const head = document.querySelector(".header");
const txtPorto = document.querySelector(".txt-porto");
const themeBtn = document.querySelector(".theme");
const menu = document.querySelector(".menu");
const lm = document.querySelectorAll(".lineMenu");
const imenu = document.querySelector(".isi-mn");
const list = document.querySelectorAll(".list");
const h1 = document.querySelectorAll("h1");
const time = document.querySelector(".waktu");
const txtKontak = document.querySelector(".txt-contact");
const contact = document.querySelector(".contact");
const notif = document.querySelector(".notif");
const inotif = document.querySelectorAll(".inotif");
const txtNotifB = document.querySelectorAll(".txt-notif b");
const go = document.querySelectorAll(".go");
const wa = document.querySelector(".wa");
const em = document.querySelector(".em");
const ig = document.querySelector(".ig");
const IAbt = document.querySelector(".iconAbt");
const IPj = document.querySelector(".iconProject");
const ICheck = document.querySelector(".iconCheck");
const IFun = document.querySelector(".iconFun");
const section = document.querySelectorAll("section");
const flexH = document.querySelectorAll(".flexH");
const txtNama = document.querySelectorAll(".nama");
const cake = document.querySelector(".cake");
const awd = document.querySelector(".awd");
const fp = document.querySelectorAll(".fp");
const cb = document.querySelectorAll(".codeBuble");
const imf = document.querySelector(".img-Fas");
const fsp = document.querySelectorAll(".fsproject");
const txtfun = document.querySelectorAll(".txt-fun");

function unlock() {
    const blur = document.querySelector(".blur");
    const pp = document.querySelector(".pp");
    const masuk = document.querySelector(".masuk");
    
    masuk.style.opacity = "0";
    pp.style.opacity = "0";
    pp.style.scale = "0";
    blur.style.opacity = "0";
    
    mbg.style.backgroundSize = "120%";
    
    setTimeout(() => {
        blur.style.display = "none";
        head.style.display = "flex";
        menu.style.display = "flex";
        time.style.display = "block";
        txtKontak.style.display = "block";
        contact.style.display = "flex";
        notif.style.display = "flex";
        
        section.forEach(section => {
            section.style.display = "block";
        });
        document.querySelector(".credit").style.display = "block";
    }, 1500);
}

function dark() {
    mbg.style.backgroundColor = "black";
    mbg.style.backgroundImage = "url('bg1_dark.jpg')";
    txtPorto.style.color = "yellow";
    head.style.backgroundColor = "#1e1e1e";
    head.style.boxShadow = "none";
    
    themeBtn.setAttribute("onclick", "light()");
    themeBtn.style.border = "none";
    themeBtn.style.backgroundColor = "yellow";
    themeBtn.style.boxShadow = "0 0 5px 1px yellow";
    
    h1.forEach(h1 => {
        h1.style.color = "white";
    });
    
    lm.forEach(line => {
        line.style.backgroundColor = "white";
    });
    
    time.style.color = "white";
    txtKontak.style.color = "white";
    
    inotif.forEach(inotf => {
        inotf.style.backgroundImage = "linear-gradient(to right, black 50%, rgba(255, 255, 255, 0.25) 50%)";
    })
    
    txtNotifB.forEach(teks => {
        teks.style.color = "white";
    });
    go.forEach(tek => {
        tek.style.color = "yellow";
    });
    
    wa.style.backgroundImage = "url('wa2.png')";
    em.style.backgroundImage = "url('email2.png')";
    ig.style.backgroundImage = "url('ig2.png')";
    
    IAbt.style.backgroundImage = "url('info2.png')";
    IPj.style.backgroundImage = "url('project2.png')";
    ICheck.style.backgroundImage = "url('check2.png')";
    IFun.style.backgroundImage = "url('celebrate2.png')";
    
    list.forEach(listtxt => {
        listtxt.style.color = "white";
    });
    txtNama.forEach(txtnm => {
        txtnm.style.color = "gray";
    });
    
    cake.style.backgroundImage = "url('dark_cake.png')";
    awd.style.color = "gray";
    
    fp.forEach(fieldFp => {
        fieldFp.style.color = "white";
        fieldFp.style.backgroundImage = "linear-gradient(45deg, black 50%, rgba(255, 255, 255, 0.25) 50%)"
    });
    cb.forEach(cbtext => {
        cbtext.style.color = "white";
    });
    
    imf.style.backgroundImage = "url('charStore2.png')";
    
    fsp.forEach(fsp => {
        fsp.style.color = "white";
    });
    
    txtfun.forEach(txf => {
        txf.style.color = "white";
    });
}
function light() {
    mbg.style.backgroundColor = "white";
    mbg.style.backgroundImage = "url('bg1.jpg')";
    txtPorto.style.color = "green";
    head.style.background = "none";
    head.style.boxShadow = "2px 5px 10px 1px black";
    
    themeBtn.setAttribute("onclick", "dark()");
    themeBtn.style.borderBottom = "3px solid yellow";
    themeBtn.style.borderLeft = "3px solid yellow";
    themeBtn.style.backgroundColor = "black";
    themeBtn.style.boxShadow = "none";
    
    h1.forEach(h1 => {
        h1.style.color = "black";
    });
    
    lm.forEach(line => {
        line.style.backgroundColor = "black";
    });
    
    time.style.color = "black";
    txtKontak.style.color = "black";
    
    inotif.forEach(inotf => {
        inotf.style.backgroundImage = "linear-gradient(to right, skyblue 50%, rgba(255, 255, 255, 0.25) 50%)";
    })
    txtNotifB.forEach(teks => {
        teks.style.color = "black";
    });
    go.forEach(tek => {
        tek.style.color = "black";
    });
    
    wa.style.backgroundImage = "url('wa.png')";
    em.style.backgroundImage = "url('email.png')";
    ig.style.backgroundImage = "url('ig.png')";
    
    IAbt.style.backgroundImage = "url('info.png')";
    IPj.style.backgroundImage = "url('project.png')";
    ICheck.style.backgroundImage = "url('check.png')";
    IFun.style.backgroundImage = "url('celebrate.png')";
    
    list.forEach(listtxt => {
        listtxt.style.color = "black";
    });
    
    txtNama.forEach(txtnm => {
        txtnm.style.color = "black";
    });
    
    cake.style.backgroundImage = "url('light_cake.png')"
    awd.style.color = "black";
    
    fp.forEach(fieldFp => {
        fieldFp.style.color = "black";
        fieldFp.style.backgroundImage = "linear-gradient(45deg, skyblue 50%, rgba(135, 206, 235, 0.25) 50%)"
    });
    cb.forEach(cbtext => {
        cbtext.style.color = "black";
    });
    
    imf.style.backgroundImage = "url('charStore.png')";
    
    fsp.forEach(fsp => {
        fsp.style.color = "black";
    });
    
    txtfun.forEach(txf => {
        txf.style.color = "black";
    });
}

    function openMenu() {
    menu.setAttribute("onclick", "closeMenu()");
    imenu.style.display = "flex";
    imenu.style.opacity = "1";
}

function closeMenu() {
    menu.setAttribute("onclick", "openMenu()");
    imenu.style.opacity = "0";
    setTimeout(() => {
        imenu.style.display = "none";
    }, 1000);
}

const targetSection = document.querySelectorAll("section");
// Fungsi untuk memunculkan elemen secara spesifik
const munculkan = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cari hanya elemen .flexH yang ada di dalam section yang sedang terlihat
            const flexInside = entry.target.querySelectorAll(".flexH");
            flexInside.forEach(fah => {
                fah.style.display = "flex";
            });
            
            // Opsional: Berhenti mengamati section ini jika ingin animasi hanya sekali saja
            // observer.unobserve(entry.target);
        }
    });
};

const presentShow = {
    threshold: 0.5 // Ubah ke 0.2 agar animasi mulai saat 20% section terlihat
};

const observer = new IntersectionObserver(munculkan, presentShow);
targetSection.forEach(sec => observer.observe(sec));const notif = document.querySelector(".notif");
const inotif = document.querySelectorAll(".inotif");
const txtNotifB = document.querySelectorAll(".txt-notif b");
const go = document.querySelectorAll(".go");
const wa = document.querySelector(".wa");
const em = document.querySelector(".em");
const ig = document.querySelector(".ig");
const IAbt = document.querySelector(".iconAbt");
const IPj = document.querySelector(".iconProject");
const ICheck = document.querySelector(".iconCheck");
const IFun = document.querySelector(".iconFun");
const IEvent = document.querySelector(".iconEvent");
const section = document.querySelectorAll("section");
const flexH = document.querySelectorAll(".flexH");
const txtNama = document.querySelectorAll(".nama");
const cake = document.querySelector(".cake");
const awd = document.querySelector(".awd");
const fp = document.querySelectorAll(".fp");
const cb = document.querySelectorAll(".codeBuble");
const imf = document.querySelector(".img-Fas");

function unlock() {
    const blur = document.querySelector(".blur");
    const pp = document.querySelector(".pp");
    const masuk = document.querySelector(".masuk");
    
    masuk.style.opacity = "0";
    pp.style.opacity = "0";
    pp.style.scale = "0";
    blur.style.opacity = "0";
    
    mbg.style.backgroundSize = "120%";
    
    setTimeout(() => {
        blur.style.display = "none";
        head.style.display = "flex";
        menu.style.display = "flex";
        time.style.display = "block";
        txtKontak.style.display = "block";
        contact.style.display = "flex";
        notif.style.display = "flex";
        
        section.forEach(section => {
            section.style.display = "block";
        });
    }, 1500);
}

function dark() {
    mbg.style.backgroundColor = "black";
    mbg.style.backgroundImage = "url('bg1_dark.jpg')";
    txtPorto.style.color = "yellow";
    head.style.backgroundColor = "#1e1e1e";
    head.style.boxShadow = "none";
    
    themeBtn.setAttribute("onclick", "light()");
    themeBtn.style.border = "none";
    themeBtn.style.backgroundColor = "yellow";
    themeBtn.style.boxShadow = "0 0 5px 1px yellow";
    
    lm.forEach(line => {
        line.style.backgroundColor = "white";
    });
    
    time.style.color = "white";
    txtKontak.style.color = "white";
    
    inotif.forEach(inotf => {
        inotf.style.backgroundImage = "linear-gradient(to right, black 50%, rgba(255, 255, 255, 0.25) 50%)";
    })
    
    txtNotifB.forEach(teks => {
        teks.style.color = "white";
    });
    go.forEach(tek => {
        tek.style.color = "yellow";
    });
    
    wa.style.backgroundImage = "url('wa2.png')";
    em.style.backgroundImage = "url('email2.png')";
    ig.style.backgroundImage = "url('ig2.png')";
    
    IAbt.style.backgroundImage = "url('info2.png')";
    IPj.style.backgroundImage = "url('project2.png')";
    ICheck.style.backgroundImage = "url('check2.png')";
    IFun.style.backgroundImage = "url('celebrate2.png')";
    IEvent.style.backgroundImage = "url('event2.png')";
    
    list.forEach(listtxt => {
        listtxt.style.color = "white";
    });
    txtNama.forEach(txtnm => {
        txtnm.style.color = "gray";
    });
    
    cake.style.backgroundImage = "url('dark_cake.png')";
    awd.style.color = "gray";
    
    fp.forEach(fieldFp => {
        fieldFp.style.color = "white";
        fieldFp.style.backgroundImage = "linear-gradient(45deg, black 50%, rgba(255, 255, 255, 0.25) 50%)"
    });
    cb.forEach(cbtext => {
        cbtext.style.color = "white";
    });
    
    imf.style.backgroundImage = "url('charStore2.png')";
}
function light() {
    mbg.style.backgroundColor = "white";
    mbg.style.backgroundImage = "url('bg1.jpg')";
    txtPorto.style.color = "green";
    head.style.background = "none";
    head.style.boxShadow = "2px 5px 10px 1px black";
    
    themeBtn.setAttribute("onclick", "dark()");
    themeBtn.style.borderBottom = "3px solid yellow";
    themeBtn.style.borderLeft = "3px solid yellow";
    themeBtn.style.backgroundColor = "black";
    themeBtn.style.boxShadow = "none";
    
    lm.forEach(line => {
        line.style.backgroundColor = "black";
    });
    
    time.style.color = "black";
    txtKontak.style.color = "black";
    
    inotif.forEach(inotf => {
        inotf.style.backgroundImage = "linear-gradient(to right, skyblue 50%, rgba(255, 255, 255, 0.25) 50%)";
    })
    txtNotifB.forEach(teks => {
        teks.style.color = "black";
    });
    go.forEach(tek => {
        tek.style.color = "black";
    });
    
    wa.style.backgroundImage = "url('wa.png')";
    em.style.backgroundImage = "url('email.png')";
    ig.style.backgroundImage = "url('ig.png')";
    
    IAbt.style.backgroundImage = "url('info.png')";
    IPj.style.backgroundImage = "url('project.png')";
    ICheck.style.backgroundImage = "url('check.png')";
    IFun.style.backgroundImage = "url('celebrate.png')";
    IEvent.style.backgroundImage = "url('event.png')";
    
    list.forEach(listtxt => {
        listtxt.style.color = "black";
    });
    
    txtNama.forEach(txtnm => {
        txtnm.style.color = "black";
    });
    
    cake.style.backgroundImage = "url('light_cake.png')"
    awd.style.color = "black";
    
    fp.forEach(fieldFp => {
        fieldFp.style.color = "black";
        fieldFp.style.backgroundImage = "linear-gradient(45deg, skyblue 50%, rgba(135, 206, 235, 0.25) 50%)"
    });
    cb.forEach(cbtext => {
        cbtext.style.color = "black";
    });
    
    imf.style.backgroundImage = "url('charStore.png')";
}

    function openMenu() {
    menu.setAttribute("onclick", "closeMenu()");
    imenu.style.display = "flex";
    imenu.style.opacity = "1";
}

function closeMenu() {
    menu.setAttribute("onclick", "openMenu()");
    imenu.style.opacity = "0";
    setTimeout(() => {
        imenu.style.display = "none";
    }, 1000);
}

const targetSection = document.querySelectorAll("section");
// Fungsi untuk memunculkan elemen secara spesifik
const munculkan = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cari hanya elemen .flexH yang ada di dalam section yang sedang terlihat
            const flexInside = entry.target.querySelectorAll(".flexH");
            flexInside.forEach(fah => {
                fah.style.display = "flex";
            });
            
            // Opsional: Berhenti mengamati section ini jika ingin animasi hanya sekali saja
            // observer.unobserve(entry.target);
        }
    });
};

const presentShow = {
    threshold: 0.5 // Ubah ke 0.2 agar animasi mulai saat 20% section terlihat
};

const observer = new IntersectionObserver(munculkan, presentShow);
targetSection.forEach(sec => observer.observe(sec));
