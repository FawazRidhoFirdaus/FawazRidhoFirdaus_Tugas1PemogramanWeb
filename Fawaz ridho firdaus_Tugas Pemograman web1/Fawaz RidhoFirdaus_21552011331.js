document.getElementById("form-fawaz-21552011331").addEventListener("submit", function(event) {
  event.preventDefault();

  let valid = true;

  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const nim = document.getElementById("nim-FawazRidho-21552011331");
  const telepon = document.getElementById("telepon"); // ✅ disamakan dengan HTML
  const universitas = document.getElementById("universitas");
  const prodi = document.getElementById("prodi");
  const persetujuan = document.getElementById("persetujuan");

  // hapus semua pesan error
  document.querySelectorAll("small").forEach(el => el.innerText = "");

  // Validasi nama
  if (nama.value.trim() === "") {
    document.getElementById("error-nama").innerText = "Nama lengkap harus diisi";
    valid = false;
  }

  // Validasi email
  if (email.value.trim() === "") {
    document.getElementById("error-email").innerText = "Email harus diisi";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    document.getElementById("error-email").innerText = "Format email harus sesuai";
    valid = false;
  }

  // Validasi NIM
  if (nim.value.trim() === "" || isNaN(nim.value)) {
    document.getElementById("error-nim").innerText = "Input harus berupa angka, bukan huruf atau simbol";
    valid = false;
  }

  // Validasi telepon
  if (telepon.value.trim() === "" || isNaN(telepon.value)) {
    document.getElementById("error-telepon").innerText = "Input harus berupa angka, bukan huruf atau simbol";
    valid = false;
  }

  // Validasi universitas
  if (universitas.value === "") {
    document.getElementById("error-universitas").innerText = "Universitas harus dipilih";
    valid = false;
  }

  // Validasi prodi
  if (prodi.value === "") {
    document.getElementById("error-prodi").innerText = "Program Studi harus dipilih";
    valid = false;
  }

  // Validasi checkbox
  if (!persetujuan.checked) {
    document.getElementById("error-persetujuan").innerText = "Harap setujui syarat dan ketentuan.";
    valid = false;
  }

  // Jika semua valid
  if (valid) {
    alert("Pendaftaran berhasil!");
    document.getElementById("form-fawaz-21552011331").reset();
  }
});
