// api
const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = () => {
  console.log('fetchProducts gestart...');
  return fetch(BASE_URL)
    .then((res) => {
      if (!res.ok) {
        throw Error('API call mislukt: ' + res.status);
      }
      return res.json();
    })
    .then((data) => {
      console.log('fetchProducts success');
      return data.products;
    })
    .catch((err) => {
      console.error('fetchProducts error:', err);
      throw err;
    });
};

export const fetchProductDetail = (id) => {
  console.log(`fetchProductDetail gestart voor id ${id}...`);
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw Error('Product niet gevonden');
      }
      return res.json();
    })
    .then((data) => {
      console.log('fetchProductDetail success');
      return data;
    })
    .catch((err) => {
      console.error('fetchProductDetail error:', err);
      throw err;
    });
};