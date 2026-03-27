import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = React.useState(new Set());

  const products = [
    { id: 1, name: 'Monstera Deliciosa', category: 'Indoor', price: 25.99, image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8872b7?auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15.99, image: 'https://images.unsplash.com/photo-1601070350474-b2223ecc3711?auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Pothos', category: 'Indoor', price: 12.99, image: 'https://images.unsplash.com/photo-1585428505116-4a63a3a5c96e?auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 35.99, image: 'https://images.unsplash.com/photo-1611080626919-cc1e42e25007?auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'ZZ Plant', category: 'Indoor', price: 22.99, image: 'https://images.unsplash.com/photo-1599599810694-9476638aa1cc?auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Rubber Plant', category: 'Indoor', price: 29.99, image: 'https://images.unsplash.com/photo-1607771996702-ba8e92d61af5?auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Succulents Mix', category: 'Succulents', price: 18.99, image: 'https://images.unsplash.com/photo-1599599810780-07067e37db01?auto=format&fit=crop&w=500&q=60' },
    { id: 8, name: 'Aloe Vera', category: 'Succulents', price: 14.99, image: 'https://images.unsplash.com/photo-1599599810700-00677ed02a0c?auto=format&fit=crop&w=500&q=60' },
    { id: 9, name: 'Echeveria', category: 'Succulents', price: 16.99, image: 'https://images.unsplash.com/photo-1599599809662-5b503940591b?auto=format&fit=crop&w=500&q=60' },
    { id: 10, name: 'Jade Plant', category: 'Succulents', price: 20.99, image: 'https://images.unsplash.com/photo-1599809776919-7cf8fc018ce5?auto=format&fit=crop&w=500&q=60' },
    { id: 11, name: 'Cactus Mix', category: 'Succulents', price: 17.99, image: 'https://images.unsplash.com/photo-1599599810886-06e94b8d5c0e?auto=format&fit=crop&w=500&q=60' },
    { id: 12, name: 'Haworthia', category: 'Succulents', price: 13.99, image: 'https://images.unsplash.com/photo-1599599810300-000c3c17e9e9?auto=format&fit=crop&w=500&q=60' },
    { id: 13, name: 'Fern', category: 'Outdoor', price: 19.99, image: 'https://images.unsplash.com/photo-1599599809998-e1df9f93d6a0?auto=format&fit=crop&w=500&q=60' },
    { id: 14, name: 'Bamboo Plant', category: 'Outdoor', price: 24.99, image: 'https://images.unsplash.com/photo-1599599809999-f1ff2f4a0000?auto=format&fit=crop&w=500&q=60' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems(new Set(addedItems).add(product.id));
  };

  const categories = ['Indoor', 'Succulents', 'Outdoor'];

  return (
    <div className="product-listing">
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category} Plants</h2>
          <div className="products-grid">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                      disabled={addedItems.has(product.id)}
                    >
                      {addedItems.has(product.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
