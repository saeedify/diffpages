import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { About } from "./pages/About"

export const CrazyBoy = createContext();

function App() {
  const [username, setUsername] = useState("User");
  return (
    <div className="App">

      <CrazyBoy.Provider value={ {username, setUsername} }>

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>

      </CrazyBoy.Provider>

    </div>
  );
}

export default App;
