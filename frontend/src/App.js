import Header from './Components/Header';
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen';
import products from './products';

function App() {
  return (
    <div>
      <Header />
      <HomeScreen product={products}/>
      <Footer />
    </div>
  );
}

export default App;
