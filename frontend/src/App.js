import { Routes, Route } from "react-router-dom";

import Calculator from "./Components/Pages/Calculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator/>}/>


      
    </Routes> 
  );
}

export default App;
