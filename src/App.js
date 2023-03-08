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
import Category from './category/Category';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="app">
      <ToastContainer position="top-right" />

      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='CategoriesProd/:test' element={<CategoriesProd />} />
            <Route path='productDetails/:id' element={<ProductsDetails />} />

            <Route path='AccountLogin/' element={<AccountLogin />} />
            <Route path='CreateAccount/' element={<CreateAccount />} />
            <Route path='AddressBook/' element={<AddressBook />} />
            <Route path='AccountManagement/' element={<AccountManagement />} />

            <Route path='SellerProfile/' element={<SellerProfile />} />
            <Route path='IntroPage/' element={<IntroPage />} />
            <Route path='SellerCreate/' element={<SellerCreateAccount />} />
            <Route path='SellerCreateTwo/' element={<SellerCreateTwo />} />
            <Route path='AccountSeller/' element={<AccountSeller />} />

            <Route path='Cart/:id' element={<Cart />} />
            <Route path='CheckoutOne/' element={<CheckoutOne />} />
            <Route path='DeliveryMethod/' exact element={<DeliveryMethod />} />
            <Route path='PaymentMethod/' exact element={<PaymentMethod />} />

            <Route path='AboutUs/' element={<AboutUs />} />
            <Route path='Help/' element={<Help />} />
            <Route path='Privacy/' exact element={<Privacy />} />
            <Route path='Track/' exact element={<Track />} />
            <Route path='ContactUs/' exact element={<ContactUs />} />
            <Route path='Terms/' exact element={<Terms />} />
            <Route path='PlaceOrder/' exact element={<PlaceOrder />} />

            <Route path='category/' exact element={<Category />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;


