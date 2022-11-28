import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SelectedCategory from './components/selected-category/SelectedCategory';
import SelectedProduct from './components/selected-product/SelectedProduct';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { getData } from './redux/actions/index';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="main-wrapper">
      <Header />

      <Routes>
        <Route path='/online-store/build/' element={<Main />} />
        <Route path='/online-store/build/:name' element={<SelectedCategory />} />
        <Route path='/online-store/build/product/:productName' element={<SelectedProduct />} />
        <Route path='/online-store/build/shopping-cart' element={<ShoppingCart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
