import viteLogo from "/vite.svg";
import "./App.css";
import Homee from "./pages/Homee";
import Account from "./pages/Account";
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";
import Authenticity from "./pages/Authenticity";
import BidPlaced from "./pages/BidPlaced";
import Blog from "./pages/Blog";
import BrandSlider from "./pages/BrandSlider";
import Buying from "./pages/Buying";
import Cookies from "./pages/Cookies";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import ShowCase from "./pages/ShowCase";
import Privacy from "./pages/Privacy";
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";
import Refund from "./pages/Refund";
import SapSuccessful from "./pages/SapSuccessful";
import SecureShopping from "./pages/SecureShopping";
import SelectYourProductNoResult from "./pages/SelectYourProductNoResult";
import SellFunction from "./pages/SellFunction";
import SellingOnSale from "./pages/SellingOnSale";
import SellingDetails from "./pages/SellingDetails";
import SellYourProduct from "./pages/SellYourProduct";
import SellYourProductSearch from "./pages/SellYourProductSearch";
import ShippingPolicy from "./pages/ShippingPolicy";
import SnatcheList from "./pages/SnatcheList";
import Successfull from "./pages/Successfull";
import SupportFAQ from "./pages/SupportFAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sellFunction" element={<SellFunction />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support&FAQ" element={<SupportFAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/authenticity" element={<Authenticity />} />
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/brandSlider" element={<BrandSlider />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/secure-shopping" element={<SecureShopping/>} />
        <Route path="/shipping-policy" element={<ShippingPolicy/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/terms-condition" element={<TermsAndConditions/>} />
        <Route path="/cookies" element={<Cookies/>} />
      </Routes>
    </>
  );
}

export default App;
