import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const products = [
  // Indoor Plants
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor', image: '/images/fig.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', image: '/images/snake.jpg' },
  { id: 3, name: 'Monstera', price: 20, category: 'Indoor', image: '/images/monstera.jpg' },
  { id: 4, name: 'Peace Lily', price: 18, category: 'Indoor', image: '/images/peace.jpg' },
  { id: 5, name: 'ZZ Plant', price: 22, category: 'Indoor', image: '/images/zz.jpg' },
  { id: 6, name: 'Rubber Plant', price: 24, category: 'Indoor', image: '/images/rubber.jpg' },

  // Outdoor Plants
  { id: 7, name: 'Rose', price: 12, category: 'Outdoor', image: '/images/rose.jpg' },
  { id: 8, name: 'Lavender', price: 10, category: 'Outdoor', image: '/images/lavender.jpg' },
  { id: 9, name: 'Sunflower', price: 8, category: 'Outdoor', image: '/images/sunflower.jpg' },
  { id: 10, name: 'Hibiscus', price: 15, category: 'Outdoor', image: '/images/hibiscus.jpg' },
  { id: 11, name: 'Tulip', price: 9, category: 'Outdoor', image: '/images/tulip.jpg' },
  { id: 12, name: 'Marigold', price: 7, category: 'Outdoor', image: '/images/marigold.jpg' },

  // Succulents
  { id: 13, name: 'Aloe Vera', price: 6, category: 'Succulent', image: '/images/aloe.jpg' },
  { id: 14, name: 'Echeveria', price: 5, category: 'Succulent', image: '/images/echeveria.jpg' },
  { id: 15, name: 'Jade Plant', price: 7, category: 'Succulent', image: '/images/jade.jpg' },
  { id: 16, name: 'Haworthia', price: 4, category: 'Succulent', image: '/images/haworthia.jpg' },
  { id: 17, name: 'Sedum', price: 3, category: 'Succulent', image: '/images/sedum.jpg' },
  { id: 18, name: 'Cactus', price: 5, category: 'Succulent', image: '/images/cactus.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Plants</Link> |{' '}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      {/* Products by Category */}
      {['Indoor', 'Outdoor', 'Succulent'].map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div className="products">
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} width="100" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
