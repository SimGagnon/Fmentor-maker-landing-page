import logo from './logo.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import "./App.css"
import "./scss/_globals.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Advantages />
    </div>
  );
}

export default App;
