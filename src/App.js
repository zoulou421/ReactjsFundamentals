import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  /* return (
     <div className="m-5">
        <Counter title="Counter 1" value={1} image="images/profile1.png" />
        <Counter title="Counter 2" value={2} image="images/profile2.png" />
        <Counter title="Counter 3" value={3} image="images/profile3.png" />
     </div>
   );*/
  return (
   /* <Router>
      <nav className="navbar navbar-expand-sm bg-primary navbar-brand">
        <ul className="navbar-nav">
          <li ><Link to="/home" className="nav-link">Home</Link></li>
          <li ><Link to="/counter" className="nav-link">Counter</Link></li>
          <li ><Link to="/gallery" className="nav-link" >Gallery</Link></li>
          <li ><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </nav>
      <div className="container">
         <switch>
            <Router path="/counter" component="{Counter}"></Router>
         </switch>
      </div>

    </Router>*/
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="nav-link text-white">Counter</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link text-white">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-white">About</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/home" element={<Counter />} />
          <Route
            path="/counter"
            element={
              <div className="m-5">
                <Counter title="Counter 1" value={1} image="images/profile1.png" />
                <Counter title="Counter 2" value={2} image="images/profile2.png" />
                <Counter title="Counter 3" value={3} image="images/profile3.png" />
              </div>
            }
          />
          <Route path="/gallery" element={<Counter />} />
          <Route path="/about" element={<Counter />} />
          <Route path="/gallery" element={<Counter />} />
          <Route path="/about" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
