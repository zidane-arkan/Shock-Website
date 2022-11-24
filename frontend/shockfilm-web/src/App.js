import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import AnimatedRoutes from './components/layout/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <section className="container-fluid ">
        <div className="row position-relative">
          <Router>
            <Navbar />
            <AnimatedRoutes />
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
