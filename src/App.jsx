
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/productos" element={<ItemListContainer/>} />
      <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
      
           
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
