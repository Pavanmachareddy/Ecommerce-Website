import './App.css';
import Header from './component/Layout/Header/Header';
import Music from './component/Layout/Music/Music';
import Merch from './component/Layout/Merch/Merch';
import Footer from './component/Layout/Footer/Footer';

function App() {
  
  
  return (
    
    <div>
      <Header />
      <Music />
      <Merch />
      <button  className='cart-btn-bottom'>See the Cart</button>
    <Footer />
    </div>
  );
}

export default App;
