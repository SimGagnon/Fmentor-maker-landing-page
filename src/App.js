import logo from './logo.svg';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Advantages from './components/Advantages/Advantages';
import Pricing from './components/Pricing/Pricing';
import "./App.css"
import "./scss/_globals.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Advantages />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
