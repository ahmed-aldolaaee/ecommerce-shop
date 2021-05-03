import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen';
import products from './products';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen product={products}/>
      <Footer />
    </div>
  );
}

export default App;
