import './App.css';
import "./stylesheets/utility.css";
import {Routes, Route} from "react-router-dom";
import {Navbar, Footer} from "./components/Cmponents";
import {Home, PageNotFound} from "./pages//Pages";
import { Landing } from './pages/landing/Landing';
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div>
      <Navbar />
      </div>
      <div className="main-style">
      <Routes>
        <Route path='/'element={<Landing/>} />
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>
      <div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
