import "./App.css";
import Main from "./view/Main";
import DisplayOneProduct from "./components/DisplayOneProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="/product/:id" element={<DisplayOneProduct/>}/> 
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;