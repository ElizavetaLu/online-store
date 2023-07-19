import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Popup from './components/add-components/popup/Popup';
import Main from './components/main/Main';
import SelectedCategory from './components/selected-category/SelectedCategory';
import SelectedProduct from './components/selected-product/SelectedProduct';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { getData } from './redux/actions/index';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <>
      <Header />

      <Popup />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:name' element={<SelectedCategory />} />
        <Route path='/product/:productName' element={<SelectedProduct />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
