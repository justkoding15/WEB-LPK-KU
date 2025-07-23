document.addEventListener("DOMContentLoaded", function () {
  alert("Selamat datang di LPK WTC Singaraja!");
  tampilkanSalam();
  setInterval(tampilkanWaktu, 1000);

  const infoBtn = document.getElementById("infoBtn");
  if (infoBtn) {
    infoBtn.onclick = function () {
      alert("Informasi lengkap akan segera tersedia di website kami.");
    };
  }

  let gelap = false;
  const tombolWarna = document.getElementById("gantiWarnaBtn");

  if (tombolWarna) {
    tombolWarna.onclick = function () {
      document.body.classList.toggle("dark-mode");
      gelap = !gelap;
      tombolWarna.textContent = gelap ? "Mode Terang" : "Mode Gelap";
    };
  }
});

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

function tampilkanWaktu() {
  const sekarang = new Date();
  const jam = String(sekarang.getHours()).padStart(2, '0');
  const menit = String(sekarang.getMinutes()).padStart(2, '0');
  const detik = String(sekarang.getSeconds()).padStart(2, '0');
  document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}
