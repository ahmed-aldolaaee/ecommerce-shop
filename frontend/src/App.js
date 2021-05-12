import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
