import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar, Footer} from "./components/Cmponents";
import {Home, PageNotFound} from "./pages//Pages";
function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <div className="main-style">
      <Routes>
      <Route path="/" element={<Home />}/>
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
