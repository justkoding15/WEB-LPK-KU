document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan alert selamat datang
  alert("Selamat datang di LPK WTC Singaraja!");
  tampilkanSalam();
  setInterval(tampilkanWaktu, 1000);

  // Klik info
  document.getElementById("infoBtn").onclick = function() {
    alert("Informasi lengkap akan segera tersedia di website kami.");
  };

 // Toggle warna hitam ↔ putih
let gelap = false;

document.getElementById("gantiWarnaBtn").onclick = function () {
  if (gelap) {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    this.textContent = "Mode Gelap";
  } else {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    this.textContent = "Mode Terang";
  }
  gelap = !gelap;
};

// Fungsi salam
function tampilkanSalam() {
  const jam = new Date().getHours();
  let salam = "";

  if (jam >= 5 && jam < 11) {
    salam = "Selamat Pagi!";
  } else if (jam >= 11 && jam < 15) {
    salam = "Selamat Siang!";
  } else if (jam >= 15 && jam < 18) {
    salam = "Selamat Sore!";
  } else {
    salam = "Selamat Malam!";
  }

  document.getElementById("salam").textContent = salam;
}

// Fungsi waktu
function tampilkanWaktu() {
  const sekarang = new Date();
  const jam = String(sekarang.getHours()).padStart(2, '0');
  const menit = String(sekarang.getMinutes()).padStart(2, '0');
  const detik = String(sekarang.getSeconds()).padStart(2, '0');

  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}
