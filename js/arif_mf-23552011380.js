const form = document.getElementById("form");

//nama
const nameInput = document.getElementById("nameInput");
const namaError = document.getElementById("namaError");

//email
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const emailError2 = document.getElementById("emailError2");

//nim
const nimInput = document.getElementById("arif-23552011380");
const nimError = document.getElementById("nimError");

//no telp/whatsapp
const noInput = document.getElementById("noInput");
const noTelpError = document.getElementById("noError");

//univ
const univ = document.getElementById("univ");
const univError = document.getElementById("univError");

//program studi
const programStudi = document.getElementById("programStudi");
const prodiError = document.getElementById("prodiError");

//syarat & ketentuan
const cbSetuju = document.getElementById("setuju");
const cbError = document.getElementById("setujuError");

// Fungsi validasi email
function validasiEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Fungsi validasi angka
function validasiAngka(input) {
  const angkaPattern = /^[0-9]+$/;
  return angkaPattern.test(input);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  //validasi nama
  if (nameInput.value.trim() === "") {
    namaError.style.display = "block";
    nameInput.classList.add("input-error");
    isValid = false;
  } else {
    namaError.style.display = "none";
    nameInput.classList.remove("input-error");
  }

  //validasi email
  const emailTrim = emailInput.value.trim();
  if (emailTrim === "") {
    emailError.style.display = "block";
    emailError2.style.display = "none";
    emailInput.classList.add("input-error");
    isValid = false;
  } else if (!validasiEmail(emailTrim)) {
    emailError.style.display = "none";
    emailError2.style.display = "block";
    emailInput.classList.add("input-error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailError2.style.display = "none";
    emailInput.classList.remove("input-error");
  }

  //validasi nim
  const nimValue = nimInput.value.trim();
  if (nimValue === "") {
    nimError.textContent = "NIM harus diisi";
    nimError.style.display = "block";
    nimInput.classList.add("input-error");
    isValid = false;
  } else if (!validasiAngka(nimValue)) {
    nimError.textContent = "Input harus berupa angka, bukan huruf atau simbol";
    nimError.style.display = "block";
    nimInput.classList.add("input-error");
    isValid = false;
  } else {
    nimError.style.display = "none";
    nimInput.classList.remove("input-error");
  }

  //validasi no telp/whatsapp
  const noValue = noInput.value.trim();
  if (noValue === "") {
    noTelpError.textContent = "Nomor telepon harus diisi";
    noTelpError.style.display = "block";
    noInput.classList.add("input-error");
    isValid = false;
  } else if (!validasiAngka(noValue)) {
    noTelpError.textContent = "Input harus berupa angka, bukan huruf atau simbol";
    noTelpError.style.display = "block";
    noInput.classList.add("input-error");
    isValid = false;
  } else {
    noTelpError.style.display = "none";
    noInput.classList.remove("input-error");
  }

  //validasi univ
  if (univ.value === "") {
    univError.style.display = "block";
    univ.classList.add("input-error");
    isValid = false;
  } else {
    univError.style.display = "none";
    univ.classList.remove("input-error");
  }

  //validasi prodi
  if (programStudi.value === "") {
    prodiError.style.display = "block";
    programStudi.classList.add("input-error");
    isValid = false;
  } else {
    prodiError.style.display = "none";
    programStudi.classList.remove("input-error");
  }

  //validasi checkbox
  if (!cbSetuju.checked) {
    cbError.style.display = "block";
    isValid = false;
  } else {
    cbError.style.display = "none";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.submit();
  }
});