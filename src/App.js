import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Users from "./components/Users";
import {
  HashRouter as Router,
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
      <Router history={hist} basename="/">
        <Switch>
          <Route exact path="/" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/SignIn" component={LoginContainer} />
          <Route exact path="/CarsharingFrontend/Register" component={LoginContainer} />
          <Route exact path="/CarsharingFrontend/Cars" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Prices" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/404" component={LoginContainer} />
          <Route exact path="/CarsharingFrontend/Users" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Contact" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Car/:id" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/PaymentForm" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Review" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/ChechoutForm" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Checkout/:id" component={DefaultContainer} />
          <Route exact path="/CarsharingFrontend/Costs" component={DefaultContainer} />
          <Redirect to="/CarsharingFrontend/404" />
        </Switch>
      </Router>
    </Provider>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/CarsharingFrontend/SignIn" component={SignInSide} />
    <Route exact path="/CarsharingFrontend/Register" component={SignUp} />
    <Route exact path="/CarsharingFrontend/404" component={NotFoundPage} />
  </div>
);

const DefaultContainer = () => (
  <div className="container">
    <PrimarySearchAppBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/CarsharingFrontend/Cars" component={CarGridList} />
    <Route exact path="/CarsharingFrontend/Prices" component={Pricing} />
    <Route exact path="/CarsharingFrontend/Users" component={Users} />
    <Route exact path="/CarsharingFrontend/Contact" component={AddressForm} />
    <Route exact path="/CarsharingFrontend/Costs" component={Costs} />
    <Route path="/CarsharingFrontend/Car/:id" component={RecipeReviewCard} />
    <Route path="/CarsharingFrontend/PaymentForm" component={CheckoutPaymentForm} />
    <Route path="/CarsharingFrontend/Review" component={CheckoutReview} />
    <Route path="/CarsharingFrontend/ChechoutForm" component={CheckoutAddressForm} />
    <Route path="/CarsharingFrontend/Checkout/:id" component={Checkout} />
    <StickyFooter />
  </div>
);

/**
 *
 */
export default App;
