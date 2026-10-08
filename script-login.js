const form = document.getElementById("formLogin");
const pesan = document.getElementById("pesan");
const password = document.getElementById("password");

// Tampilkan / sembunyikan password
document.getElementById("tampilPassword").addEventListener("change", function () {
    password.type = this.checked ? "text" : "password";
});

// Validasi sederhana (hanya contoh tampilan)
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = password.value;

    if (user === "" || pass === "") {
        pesan.className = "pesan error";
        pesan.textContent = "Username dan password wajib diisi.";
        return;
    }

    if (pass.length < 6) {
    pesan.className = "pesan error";
    pesan.textContent = "Password minimal 6 karakter.";
    return;
    }

    // Ganti bagian ini dengan proses login ke server/database
    pesan.className = "pesan sukses";
    pesan.textContent = "Login berhasil (contoh). Hubungkan ke server untuk login sungguhan.";
});