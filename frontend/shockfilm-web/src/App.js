import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import './fontawesomeicon';
import './responsive.css';
import './mobile.css';

function App() {
  return (
    <div className="App">
      <section className="container-fluid ">
        <div className="row position-relative">
          <Router>
            <Navbar />
            <AnimatedRoutes />
            <Footer/>
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
