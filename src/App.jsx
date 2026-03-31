
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Midbanner from "./Components/MidBanner/MidBanner"
import Navbar from "./Components/Navbar/Navbar"
import ToolSection from "./Components/Tools/ToolSection"
import Tools from "./Components/Tools/Tools"
import Guide from "./Components/Guide/Guide"
import Pricing from './Components/Pricing/Pricing'
const ToolsData = async () => {
  const res = await fetch("/data.json");
  return res.json();

}




function App() {
  const ToolPromise = ToolsData();

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Midbanner>Hello</Midbanner>
      <ToolSection></ToolSection>
      <Suspense fallback={<p>Tools are loading...</p>}>
        <Tools ToolPromise={ToolPromise} ></Tools>

      </Suspense>

      <Guide></Guide>
      <Pricing></Pricing>
    </>
  )
}

export default App
