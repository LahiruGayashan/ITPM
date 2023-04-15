import { BrowserRouter, Routes, Route } from "react-router-dom";

//page & component imports
import Home from "./pages/Home";
import Navbar from "./";

function App() {
  return(

   <div className="App">
    <BrowserRouter>
    <div className="pages">
        <Routes>
           <Route path="/" 
              element={<Home />} />
           </Routes>
         </div>
    </BrowserRouter>

  </div>
  );
}

export default App;
