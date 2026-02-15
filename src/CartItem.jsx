import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // دالة لحساب المجموع الإجمالي بشكل واضح
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
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
          {/* قائمة المنتجات في العربة */}
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>

                {/* أزرار التحكم في الكمية */}
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
              </div>
            </div>
          ))}

          {/* المجموع النهائي */}
          <h2>Total Amount: ${calculateTotal()}</h2>

          {/* أزرار Checkout و Continue Shopping */}
          <Link to="/coming-soon">
            <button>Checkout</button>
          </Link>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
