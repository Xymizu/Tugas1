const errorNama = document.getElementById('namaError');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default
    // Validasi Nama
    if(inputNama.value.trim() === '') {
        errorNama.textContent = 'Nama tidak boleh kosong';
    } else {
        errorNama.textContent = '';
    }
  }
);