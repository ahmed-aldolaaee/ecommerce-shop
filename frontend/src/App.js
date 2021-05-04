import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import products from "./products";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact>
          <HomeScreen product={products} />
        </Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
