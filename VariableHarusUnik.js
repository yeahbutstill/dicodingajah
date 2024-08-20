// Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnya.
// Berikut adalah contoh kode yang akan menghasilkan error karena memberikan nama variabel yang sudah terdefinisi sebelumnya.

// Company data
const name = 'Dicoding';
const legal = 'LLC';

// Employe data
//const name = 'Budi'; // Error karena name sudah ada di atas
const division = 'IT';

// Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda, contohnya variabel yang berada dalam sebuah fungsi berbeda.
function printCompanyInfo() {
  const name = 'Dicoding'; // ini boleh sama
  const legal = 'LLC';

  console.log('Company name: ', name);
  console.log('Legal type: ', legal);
}

function printEmployeInfo() {
  const name = 'Budi'; // ini boleh sama
  const division = 'IT';

  console.log('Employe name:', name);
  console.log('Division: ', division);
}

printCompanyInfo();
printEmployeInfo();
