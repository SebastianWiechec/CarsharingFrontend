import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/Register";
import Home from "./pages/Home";
import Pricing from "./pages/CarPricing";
import NotFoundPage from "./pages/404";
import PrimarySearchAppBar from "./components/NavBar";
import StickyFooter from "./components/Footer";
import { CarGridList } from "./components/CarGridList";
import RecipeReviewCard from "./components/CarDescription";
import AddressForm from "./components/contact";
import CheckoutPaymentForm from "./components/Chechout/PaymentForm";
import CheckoutReview from "./components/Chechout/Review";
import CheckoutAddressForm from "./components/Chechout/AddressForm";
import Checkout from "./components/Chechout/Checkout";
import { CostsGridList as Costs } from "./components/CostsGridList";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={DefaultContainer} />
          <Route exact path="/SignIn" component={LoginContainer} />
          <Route exact path="/Register" component={LoginContainer} />
          <Route exact path="/Cars" component={DefaultContainer} />
          <Route exact path="/Prices" component={DefaultContainer} />
          <Route exact path="/404" component={LoginContainer} />
          <Route exact path="/Users" component={DefaultContainer} />
          <Route exact path="/Contact" component={DefaultContainer} />
          <Route exact path="/Car/:id" component={DefaultContainer} />
          <Route exact path="/PaymentForm" component={DefaultContainer} />
          <Route exact path="/Review" component={DefaultContainer} />
          <Route exact path="/ChechoutForm" component={DefaultContainer} />
          <Route exact path="/Checkout/:id" component={DefaultContainer} />
          <Route exact path="/Costs" component={DefaultContainer} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/SignIn" component={SignInSide} />
    <Route exact path="/Register" component={SignUp} />
    <Route exact path="/404" component={NotFoundPage} />
  </div>
);

const DefaultContainer = () => (
  <div className="container">
    <PrimarySearchAppBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/Cars" component={CarGridList} />
    <Route exact path="/Prices" component={Pricing} />
    <Route exact path="/Users" component={Users} />
    <Route exact path="/Contact" component={AddressForm} />
    <Route exact path="/Costs" component={Costs} />
    <Route path="/Car/:id" component={RecipeReviewCard} />
    <Route path="/PaymentForm" component={CheckoutPaymentForm} />
    <Route path="/Review" component={CheckoutReview} />
    <Route path="/ChechoutForm" component={CheckoutAddressForm} />
    <Route path="/Checkout/:id" component={Checkout} />
    <StickyFooter />
  </div>
);

/**
 *
 */
export default App;
