import { BrowserRouter, Route, Routes } from "react-router"
import CountriesUn from "./Pages/CountriesUn"
import Home from "./Pages/Home"


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countries" element={<CountriesUn/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App