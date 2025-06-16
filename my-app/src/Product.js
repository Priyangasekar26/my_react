import React from 'react';
function Product() {
  const products = [
    {  name: 'Pen', price: 10 },
    {  name: 'Notebook', price: 45 },
    { name: 'Eraser', price: 10 },
  ];
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
export default Product;
