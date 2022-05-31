
import Basic from "./Components/Basic"
import CheckIn from "./Components/CheckIn"
import CheckOut from "./Components/CheckOut"
import { BrowserRouter, Route,Routes } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Basic/>} />
          <Route path="/CheckIn" element={<CheckIn/>}/>
          <Route path="/CheckIn/CheckOut" element={<CheckOut/>}/>     
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
