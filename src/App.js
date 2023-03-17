import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './HomePage/Home';
import ScrollToTop from './ScrollToTop';
import CategoriesProd from './HomePage/CategoriesProd';
import ProductsDetails from './HomePage/ProductDetails';
import Cart from './Cart/Cart';
import CheckoutOne from './Cart/CheckoutOne';
import DeliveryMethod from './Cart/DeliveryMethod';
import PaymentMethod from './Cart/PaymentMethod';
import IntroPage from './Seller/IntroPage';
import SellerProfile from './Seller/SellerProfile';
import AccountSeller from './Seller/AccountSeller';
import AccountManagement from './LoginPage/AccountManagement';
import AddressBook from './LoginPage/AddressBook';
import CreateAccount from './LoginPage/CreateAccount';
import AccountLogin from './LoginPage/AccountLogin';
import SellerCreateAccount from './LoginPage/SellerCreateAccount';
import SellerCreateTwo from './LoginPage/SellerCreateTwo';
import AboutUs from './AboutUs/AboutUs';
import Help from './Help/Help';
import Privacy from './Help/Privacy';
import Track from './Help/Track';
import ContactUs from './Help/ContactUs';
import Terms from './Help/Terms';
import PlaceOrder from "./Help/PlaceOrder"
import SavedItem from './Seller/SavedItem';
import ProductGrid from './category/ProductGrid';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const user = localStorage.getItem("user")


function App() {
  return (
    <div className="app">
      <ToastContainer position="top-right" />

      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/categories-product/:test' element={<CategoriesProd />} />
            <Route path='/product/:id' element={<ProductsDetails />} />

            <Route path='/account-login/' element={<AccountLogin />} />
            <Route path='/create-account/' element={<CreateAccount />} />
            <Route path='/address-book/' element={<AddressBook />} />
            <Route path='/account-management/' element={<AccountManagement />} />

            <Route path='/seller-profile/' element={<SellerProfile />} />
            <Route path='/intro-page/' element={<IntroPage />} />
            <Route path='/seller-create/' element={<SellerCreateAccount />} />
            <Route path='/seller-create-two/' element={<SellerCreateTwo />} />
            <Route path='/account-seller/' element={<AccountSeller />} />

            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/checkout-one/' element={<CheckoutOne />} />
            <Route path='/delivery-method/' exact element={<DeliveryMethod />} />

            <Route path='/about-us/' element={<AboutUs />} />
            <Route path='/help/' element={<Help />} />
            <Route path='/privacy/' exact element={<Privacy />} />
            <Route path='/track/' exact element={<Track />} />
            <Route path='/contact-us/' exact element={<ContactUs />} />
            <Route path='/terms/' exact element={<Terms />} />
            <Route path='/place-order/' exact element={<PlaceOrder />} />

            <Route path='/category/' exact element={<ProductGrid />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;


