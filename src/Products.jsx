import React, { useState } from 'react';

const CAMISAS = 'Camisas';
const CALÇAS = 'Calças';

export default function Products({ setCart, cart }) {
  const [products] = useState([

    {
      image: 'https://images.lojanike.com.br/1024x1024/produto/87152_694934_20190627194702.png',
      category: CALÇAS,
      name: 'Calça 1',
      cost: 59.99,

    },
    {
      image: 'https://images.lojanike.com.br/1024x1024/produto/193225_1911799_20200115124017.jpg',
      category: CALÇAS,
      name: 'Calça 2',
      cost: 48.99,

    },
    {
      image:
      'https://i.pinimg.com/236x/6d/2a/01/6d2a01492418171463293f7cfb952dd5.jpg',
      category: CAMISAS,
      name: 'Camisa 1',
      cost: 19.99,
  },
      {
      image:
      'https://ae01.alicdn.com/kf/HTB1s7ilSVXXXXbMXXXXq6xXFXXXL/Moda-2020-primavera-outono-cor-pura-social-masculina-jovem-neg-cio-masculino-camisa-de-manga-longa.jpg',
      category: CAMISAS,
      name: 'Camisa 2',
      cost: 24.99,
  },

  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(CAMISAS);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Produtos</h1>
      Selecione:
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={CAMISAS}>{CAMISAS}</option>
        <option value={CALÇAS}>{CALÇAS}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
}