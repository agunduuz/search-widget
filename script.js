const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

/*

1- İşlemi gerçekleştireceğimiz alanları seçiyoruz.

2- "btn" üzerine "addEventListener()" ile "'click'" eventi atıyoruz.

3- Arrow function kullanıyoruz.

4- "search" kullanarak ana tag'e ulaşıyoruz. 

NOT: '.search' düğmeyi sağ tarafa itecektir.
Input alanını ise genişletecektir.

5- Class içerisindeki sınıfı değiştirmek için bir yöntem olan "search.classList.toggle()" kullanıyoruz.

6. Butona tıklandıktan sonra imleç direk Input üzerinde olacaktır.

*/
