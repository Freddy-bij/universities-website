import { Carousel } from "antd"
import Afric from "./components/Afric"
import Americ from "./components/Americ"
import Asia from "./components/Asia"
import Australia from "./components/Australia"
import Europe from "./components/Europe"



const App = () => {
  return (
    <div>

        <Carousel autoplay={true} autoplaySpeed={3000} infinite={true}>
            <Afric />
            <Americ />
            <Asia />
            <Europe />
            <Australia />
        </Carousel>
          
      
    </div>
  )
}

export default App