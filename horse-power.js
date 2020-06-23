var ks = document.getElementsByClassName("ks")[0];
var kw = document.getElementsByClassName("kw")[0];

// Promena  Kilowata u Konjske snage
// 1 kW = 1,35962 KS
function kwToKs() {
    ks.value = Math.round(kw.value * 1.35962);
    if (kw.value * 0 != 0) {
        kw.value = ""
        ks.value = ""
    }
}

// Promena Konjskih snaga u Kilowate
// 1KS = 0.7353 KW
function ksToKw() {
    kw.value = Math.round(ks.value * 0.7353);
    if (ks.value * 0 != 0) {
        ks.value = "";
        kw.value = "";
    }
}
