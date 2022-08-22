import './App.css';
import { useState } from 'react';
import Header from './component/Layout/Header/Header';
import Music from './component/Layout/Music/Music';
import Merch from './component/Layout/Merch/Merch';
import Footer from './component/Layout/Footer/Footer';
import Cart from './Cart/Cart';

function App() {
  const [cartItems,setCartItems] = useState(false)

  const CartItems = () =>{
    setCartItems(true);
  }
  
  const cartItemsClose = () =>{
    setCartItems(false);
  }
  
  return (
    
    <div>
      <Header showCartItem={CartItems}/>
    {cartItems &&  <Cart  Close = {cartItemsClose}/>}
      <Music />
      <Merch />
      <button  className='cart-btn-bottom'>See the Cart</button>
    <Footer />
    </div>
  );
}

export default App;
