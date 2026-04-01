
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Midbanner from "./Components/MidBanner/MidBanner"
import Navbar from "./Components/Navbar/Navbar"
import ToolSection from "./Components/Tools/ToolSection"
import Tools from "./Components/Tools/Tools"
import Guide from "./Components/Guide/Guide"
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
const ToolsData = async () => {
  const res = await fetch("/data.json");
  return res.json();

}




function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const ToolPromise = ToolsData();

  const handleAddToCart = (tool) => {
    setCartItems((currentItems) => {
      const exists = currentItems.some((item) => item.id === tool.id);

      if (exists) {
        return currentItems;
      }

      return [...currentItems, tool];
    });
  };

  const handleRemoveFromCart = (toolId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== toolId));
  };

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Midbanner></Midbanner>
      <ToolSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.length}
      ></ToolSection>
      <Suspense fallback={<p>Tools are loading...</p>}>
        <Tools
          ToolPromise={ToolPromise}
          activeTab={activeTab}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        ></Tools>

      </Suspense>

      <Guide></Guide>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
