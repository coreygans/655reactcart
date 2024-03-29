import { Link } from 'react-router-dom';


function Cart({ cartItems, removeFromCart }) {

     const totalPrice = cartItems.reduce((total, item) => {
       return total + item.price * item.quantity;
       }, 0);
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        {/* Check if the cart is empty and show a message if it is */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cartContents"> 
          <button className='proceedCheckout'>
            <Link to="/checkout"  className="proceedCheckout">proceed to checkout</Link></button> <br />
            Your cart total: <br /> ${totalPrice}
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  Price: ${item.price}
                  <p>Quantity: {item.quantity} </p>
                  <button className="removeFromCart" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                  <hr></hr>
                </div>
              </li>
            ))}
          </ul>
          </div>
        )}
      </div>
    );
  }
  
export default Cart;