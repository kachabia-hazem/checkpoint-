import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './compnents/navbarcomp';
import BasicExample from './compnents/card';
import HorizontalExample from './compnents/cards';
function App() {
  return (
    <div className="App">
      <NavbarComp /> {/* Utilisation correcte avec une majuscule */}
      <HorizontalExample/>
    </div>
  );
}

export default App;
