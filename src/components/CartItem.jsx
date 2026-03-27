import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Shopping Cart is Empty</h2>
        <p>Add some plants to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>Quantity: {item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p>Total: ${item.totalPrice.toFixed(2)}</p>
            </div>
            <button className="delete-btn" onClick={() => handleRemove(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-amount">
          Total Amount: ${totalAmount.toFixed(2)}
        </div>
        <button className="checkout-btn">Checkout (Coming Soon)</button>
        <button className="continue-shopping-btn">Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartItem;
