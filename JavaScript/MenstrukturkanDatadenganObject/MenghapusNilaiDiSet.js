// Terakhir, untuk menghapus nilai di set, gunakan method delete
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

set.delete(1);
set.delete(2);
set.delete(3);
set.delete(4);

console.log(set);

// Ingat bahwa set tidak memiliki urutan atau index, jadi argument yang dimasukan ke 
// dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
