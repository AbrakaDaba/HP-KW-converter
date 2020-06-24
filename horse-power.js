var ks = document.getElementsByClassName("ks")[0];
var kw = document.getElementsByClassName("kw")[0];

// Promena  Kilowata u Konjske snage
// 1 kW = 1,359621617 KS
function kwToKs() {
    ks.value = Math.round(kw.value * 1.359621617);
    if (kw.value * 0 != 0) {
        kw.value = ""
        ks.value = ""
    }
}

// Promena Konjskih snaga u Kilowate
// 1KS = 0,73549875 KW
function ksToKw() {
    kw.value = Math.round(ks.value * 0.73549875);
    if (ks.value * 0 != 0) {
        ks.value = "";
        kw.value = "";
    }
}
