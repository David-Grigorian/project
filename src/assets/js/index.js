import { request } from './components/request';
import { Product } from './components/product';

const requestURL = 'http://localhost:4000/assets/database/bd.json';
const input = document.querySelector('.section-search__input');
const productsInner = document.querySelector('.section-products--inner');
// const computers = [/к/gim, /ко/gim, /ком/gim, /комп/gim, /компь/gim, /компьют/gim, , /компьюте/gim, , /компьютер/gim, , /компьютеры/gim, , /компьютера/gim];

const computers = [];
const text = 'компьютер';

for (let i = 0; i < text.length; i++) {
  let t = '';
  for (let x = 0; x < i + 1; x++) {
    t += text[x];
  }
  computers.push(new RegExp(t, 'gim'));
}

// console.log(computers[0].test('к'))

// request(requestURL)
//   .then(products => new Promise(resolve => resolve(products))

input.addEventListener('input', () => {
  computers.forEach(item => {
    if (item.test(input.value)) {
      request(requestURL)
        .then(products => products.forEach(product => {
          new Product(product.id, product.type, 'компьютер', productsInner)
        }))
    }
  })
})