import { BrowserRouter, Route, Routes } from "react-router"
import CountriesUn from "./Pages/CountriesUn"
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countries" element={<CountriesUn/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App