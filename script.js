document.addEventListener("DOMContentLoaded", function () {
  tampilkanSalam();
  setInterval(tampilkanWaktu, 1000);

  const modeBtn = document.getElementById("gantiModeBtn");
  const iconMode = document.getElementById("iconMode");

  if (modeBtn) {
    modeBtn.onclick = function () {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      iconMode.textContent = isDark ? "☀️" : "🌙";
    };
  }
});

function tampilkanSalam() {
  const jam = new Date().getHours();
  let salam = "";

  if (jam >= 5 && jam < 11) {
    salam = "Selamat Pagi!おはようございます";
  } else if (jam >= 11 && jam < 15) {
    salam = "Selamat Siang!こんにちは";
  } else if (jam >= 15 && jam < 18) {
    salam = "Selamat Sore!こんにちは";
  } else {
    salam = "Selamat Malam!こんばんは";
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
