
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "../src/Context/ShoppingCartContext";


const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>

      <NavBar />

      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/productos" element={<ItemListContainer/>} />
      <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} /> 
      <Route exact path="/cart" element={<Cart />} />
           
      </Routes>
        
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
