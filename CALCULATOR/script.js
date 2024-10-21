function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
      = angka1 + angka2;
    document.getElementById("hasil").value = hasil;
}
 
function kurang() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 - angka2;
    document.getElementById("hasil").value = hasil;
}

function kali() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 * angka2;
    document.getElementById("hasil").value = hasil;
}

function bagi() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var hasil = angka1 / angka2;
    document.getElementById("hasil").value = hasil;
}