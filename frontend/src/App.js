import { Routes, Route } from "react-router-dom";

import Calculator from "./Components/Calculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator/>}/>


      
    </Routes> 
  );
}

export default App;
