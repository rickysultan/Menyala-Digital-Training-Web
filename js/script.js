
/* script pengisian data */
    const params = new URLSearchParams(window.location.search);
    document.getElementById("detailPelatihan").textContent = params.get("pelatihan") || "-";
    document.getElementById("detailTanggal").textContent = params.get("tanggal") || "-";
    document.getElementById("detailNama").textContent = params.get("nama") || "-";
    document.getElementById("detailEmail").textContent = params.get("email") || "-";
    document.getElementById("detailNoHp").textContent = params.get("nohp") || "-";
    document.getElementById("detailInstansi").textContent = params.get("instansi") || "-";


          // Ambil query string
          const params = new URLSearchParams(window.location.search);
          const course = params.get("course");

          if (course) {
            document.getElementById("namaPelatihan").value = course;
          }

          // Ambil tanggal hari ini dalam format YYYY-MM-DD
          const today = new Date().toISOString().split('T')[0];
          document.getElementById('tanggalPelatihan').value = today;

    document.getElementById("formPendaftaran").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Ambil nilai input
      const namaPelatihan = encodeURIComponent(document.getElementById("namaPelatihan").value);
      const tanggalPelatihan = encodeURIComponent(document.getElementById("tanggalPelatihan").value);
      const namaLengkap = encodeURIComponent(document.getElementById("namaLengkap").value);
      const email = encodeURIComponent(document.getElementById("email").value);
      const noHp = encodeURIComponent(document.getElementById("noHp").value);
      const instansi = encodeURIComponent(document.getElementById("instansi").value);
  
      // Arahkan ke halaman hasil
      window.location.href =
        `hasilPendaftaran.html?pelatihan=${namaPelatihan}&tanggal=${tanggalPelatihan}&nama=${namaLengkap}&email=${email}&nohp=${noHp}&instansi=${instansi}`;
    });]

