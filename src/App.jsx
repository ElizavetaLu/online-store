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
        <Route path='/online-store/build' element={<Main />} />
        <Route path='/online-store/build/:name' element={<SelectedCategory />} />
        <Route path='/online-store/build/product/:productName' element={<SelectedProduct />} />
        <Route path='/online-store/build/shopping-cart' element={<ShoppingCart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
