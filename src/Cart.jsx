import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

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

  const minusCart = (product) => {
    if(product.quantity<=0){return}
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity--;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart)
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Carrinho</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Limpar Carrinho</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
          <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
      {/*       <input
          
              value={product.quantity}
              
              onChange={(e) =>
          setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            /> */}
            <button onClick={() => addToCart(product)}>
              Adicionar
            </button>
            <button onClick={() =>  minusCart(product)}>
              Diminuir
            </button>
            <button onClick={() => removeFromCart(product)}>
              Retirar do Carrinho
            </button>
          </div>
        ))}
      </div>

      <div className="TotalSum">Total: ${getTotalSum().toFixed(2)}</div>
    </>
  );
}