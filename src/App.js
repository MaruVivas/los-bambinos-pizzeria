import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./views/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import Pizzas from "./views/Pizzas/Pizzas.jsx";
import Pizza from  "./views/Pizza/Pizza.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Context from "./context/context.js"

function App() {
  const [pizzas, setPizzas] = useState([]);
  const globalState = { pizzas };
  
  
  useEffect(() => {
    fetch('./pizzas.json')
    .then((res) => res.json())
    .then((json) => setPizzas(json))
    .catch((e) => console.log(e))
  }, [])


  return (
    <div className="App">
      <Context.Provider value={ globalState }>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element= { <Home/> }></Route>
            <Route path='/pizzas' element= { <Pizzas/> }></Route>
            <Route path='/pizzas/:id' element= { <Pizza/> }></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
