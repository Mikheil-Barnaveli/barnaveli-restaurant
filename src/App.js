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

  const [amountNumber, setAmountNumber] = useState(0);
  function handlePlusAmount() {
    setAmountNumber((prevState) => prevState + 1);
  }
  function handleMinusAmount() {
    if (amountNumber > 0) {
      setAmountNumber((prevState) => prevState - 1);
    }
  }

  const [cartData, setCartData] = useState([]);

  // console.log(cartData, "es aris card data");

  // useEffect(() => {
  //   // Load cartData from localStorage on component mount
  //   const savedCartData = localStorage.getItem('cartData');
  //   if (savedCartData) {
  //     setCartData(JSON.parse(savedCartData));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save cartData to localStorage whenever it changes
  //   localStorage.setItem('cartData', JSON.stringify(cartData));
  // }, [cartData]);


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
        <Route path="/Menu" element={<Menu menuData={data} />} />
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
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <CartPage
              data={cartData}
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
