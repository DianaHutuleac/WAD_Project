import './App.css';
import Hero from './Components/Hero';
import NavbarComponent from './Components/Navbar';
import Teams from './Components/Teams';

function App() {
  return (
    <div className="App">
        <NavbarComponent />
        <Hero />
        <Teams />
    </div>
  );
}

export default App;
