import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Cart from './Cart';
import Store from './Store';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;