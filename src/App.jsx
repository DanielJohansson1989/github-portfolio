//import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from './Portfolio.jsx';


function App() {
  
  return(
    <>   
      <header>
        <h1>Daniel Johansson</h1>
        <nav>
          <div className="link">Home</div>
          <div className="link">CV</div>
          <div className="link">Portfolio</div>
          <div className="link">Contact</div>
          <div className="link">Misc.</div>
        </nav>
      </header>

      <Portfolio/>
    
      <footer>
        <p>&copy; Daniel Johansson 2024</p>
      </footer>
    </>
  );
}

export default App
