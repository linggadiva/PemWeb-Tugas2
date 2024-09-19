const formContainer = document.getElementById('form-container');
const myForm = document.getElementById('myForm');
const namaInput = document.getElementById('nama');
const nimInput = document.getElementById('nim');
const kelasInput = document.getElementById('kelas');
const alamatInput = document.getElementById('alamat');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result-container');


submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#3e8e41';
    submitButton.style.color = '#fff';
    submitButton.style.transform = 'scale(1.1)';
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = '#fff';
    submitButton.style.transform = 'scale(1)';
});


namaInput.addEventListener('focus', () => {
    namaInput.style.backgroundColor = '#f0f0f0';
    namaInput.style.borderColor = '#4CAF50';
    namaInput.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
});

namaInput.addEventListener('blur', () => {
    namaInput.style.backgroundColor = '#fff';
    namaInput.style.borderColor = '#ccc';
    namaInput.style.boxShadow = 'none';
});


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nama = namaInput.value;
    const nim = nimInput.value;
    const kelas = kelasInput.value;
    const alamat = alamatInput.value;


    if (nama === '' || nim === '' || kelas === '' || alamat === '') {
        alert('Mohon isi semua field!');
        return;
    }


    const resultHTML = `
      <h3>Formulir Pendaftaran:</h3>
      <p>Nama: ${nama}</p>
      <p>NIM: ${nim}</p>
      <p>Kelas: ${kelas}</p>
      <p>Alamat: ${alamat}</p>
    `;
    resultContainer.innerHTML = resultHTML;
    myForm.reset(); 
});

namaInput.addEventListener('keyup', () => {
    if (namaInput.value.length < 3) {
        namaInput.style.border = '1px solid red';
    } else {
        namaInput.style.border = '1px solid #ccc';
    }
});

const labels = document.querySelectorAll('label');

labels.forEach((label) => {
    label.addEventListener('mouseover', () => {
        label.style.color = '#4CAF50';
        label.style.cursor = 'pointer';
    });

    label.addEventListener('mouseout', () => {
        label.style.color = '#000';
        label.style.cursor = 'default';
    });
});