import Navbar from "./components/layout/Navbar";
import Home from "./components/page/Home";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section className="container-fluid ">
        <div className="row position-relative">
          <Router>
            <Navbar />
            <Home />
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
