import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Plants</Link> |{' '}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}

          <h2>Total Amount: ${totalAmount}</h2>

          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
