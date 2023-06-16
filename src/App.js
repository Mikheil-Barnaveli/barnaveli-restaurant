import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {
  Router,
  Route,
  Switch,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Menu from "./Footer/subPages/Menu";
import Contact from "./Footer/subPages/Contact";
import data from "./menuData.json";
import MenuItemPage from "./MenuItemPage/MenuItemPage";
import CartPage from "./Footer/Cart/CartPage";

function App() {
  let navigate = useNavigate();

  const [isBurgerNavActive, setIsBurgerNavActive] = useState(false);

  let burgerNav;

  function handleBurgerNav() {
    setIsBurgerNavActive(!isBurgerNavActive);
  }
  if (isBurgerNavActive == false) {
    burgerNav = "0";
  } else {
    burgerNav = "60dvw";
  }

  const [cartData, setCartData] = useState([]);

  const removeItem = (id) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  const totalPrice2 = totalPrice;
  console.log(totalPrice2);


  const [updatedQuantity, setUpdatedQuantity] = useState(1)
  console.log(updatedQuantity);

  

  return (
    <>
      <Header
        burgerNav={burgerNav}
        burgerNavBtn={handleBurgerNav}
        navigateHome={() => navigate(`/barnaveli-restaurant`)}
        navigateContact={() => navigate(`/Contact`)}
        navigateMenu={() => navigate(`/Menu`)}
        data={cartData}
      />

      <Routes path="/barnaveli-restaurant" element={<Main data={data} />}>
        <Route path="/barnaveli-restaurant" element={<Main data={data} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Menu"
          element={
            <Menu
              menuData={data}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
        <Route
          path="/Menu/:menuItem"
          element={
            <MenuItemPage
              data={data}
              cartData={cartData}
              setCartData={setCartData}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <CartPage
              data={cartData}
              removeItem={removeItem}
              updateTotalPrice={updateTotalPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              setUpdatedQuantity={setUpdatedQuantity}
            />
          }
        />
        CartPage
      </Routes>

      <Footer />
    </>
  );
}

export default App;
