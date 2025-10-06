javascript
let index = 0;
let skor = 0;

function tampilkanSoal() {
  const soalSekarang = soal[index];
  document.getElementById("pertanyaan").innerText = soalSekarang.pertanyaan;
  document.getElementById("kategori").innerText = "Kategori: " + soalSekarang.kategori;

  const pilihanList = document.getElementById("pilihan");
  pilihanList.innerHTML = "";

  soalSekarang.pilihan.forEach(pilihan => {
    const li = document.createElement("li");
    li.innerText = pilihan;
    li.onclick = () => {
      if (pilihan === soalSekarang.jawaban) skor++;
      nextSoal();
};
    pilihanList.appendChild(li);
});
}

function nextSoal() {
  index++;
  if (index < soal.length) {
    tampilkanSoal();
} else {
    localStorage.setItem("skor", skor);
    window.location.href = "result.html";
}
}

if (window.location.pathname.includes("quiz.html")) {
  tampilkanSoal();
}

if (window.location.pathname.includes("result.html")) {
  document.getElementById("skor").innerText = "Skor kamu: " + localStorage.getItem("skor") + " dari " + soal.length;
}
