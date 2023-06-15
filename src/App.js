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

  // console.log(data);

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

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const handleCartButtonClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const [amountNumber, setAmountNumber] = useState(1);
  function handlePlusAmount() {
    setAmountNumber((prevState) => prevState + 1);
  }
  function handleMinusAmount() {
    if (amountNumber > 1) {
      setAmountNumber((prevState) => prevState - 1);
    }
  }

  const [cartData, setCartData] = useState([]);

  const removeItem = (id) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== id));
  };
  const [quantity, setQuantity] = useState(1)
console.log(quantity, "es aris raodenoba");

  return (
    <>
      <Header
        burgerNav={burgerNav}
        burgerNavBtn={handleBurgerNav}
        handleCart={handleCartButtonClick}
        isDropDownVisible={isDropDownVisible}
        navigateHome={() => navigate(`/barnaveli-restaurant`)}
        navigateContact={() => navigate(`/Contact`)}
        navigateMenu={() => navigate(`/Menu`)}
        data={cartData}
      />

      <Routes path="/barnaveli-restaurant" element={<Main data={data} />}>
        <Route path="/barnaveli-restaurant" element={<Main data={data} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu menuData={data} cartData={cartData}
              setCartData={setCartData}/>} />
        <Route
          path="/Menu/:menuItem"
          element={
            <MenuItemPage
              data={data}
              amountNumber={amountNumber}
              handleMinusAmount={handleMinusAmount}
              handlePlusAmount={handlePlusAmount}
              cartData={cartData}
              setCartData={setCartData}
              setQuantity={setQuantity}
              quantity={quantity}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <CartPage
              data={cartData}
              removeItem={removeItem}
              quantity={quantity}
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
