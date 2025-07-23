// Saat halaman dimuat, tampilkan pesan selamat datang
window.onload = function() {
  alert("Selamat datang di LPK WTC Singaraja!");
  tampilkanSalam();
  setInterval(tampilkanWaktu, 1000);
};

// Fungsi untuk menampilkan salam sesuai waktu
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

// Fungsi untuk menampilkan waktu saat ini
function tampilkanWaktu() {
  const sekarang = new Date();
  const jam = String(sekarang.getHours()).padStart(2, '0');
  const menit = String(sekarang.getMinutes()).padStart(2, '0');
  const detik = String(sekarang.getSeconds()).padStart(2, '0');

  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

// Fungsi tombol info
document.getElementById("infoBtn").onclick = function() {
  alert("Informasi lengkap akan segera tersedia di website kami.");
};

// Fungsi untuk mengganti warna background
document.getElementById("gantiWarnaBtn").onclick = function() {
  const warnaAcak = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = warnaAcak;
};
