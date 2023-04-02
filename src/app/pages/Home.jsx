import { Navbar, Sliders, Footer } from "../shared/components";
import "./Home.css"
import Next from "./Next";
import Cards from "./Cards";
import News from "./News";

const Home = () => {
    return (
        <section>
           <Navbar />

           <div className="home">
              <Sliders />
              {/* <Next /> */}
              <Cards />
              <News />
              <Footer />

              
           </div>
       </section>
    )
}

export default Home;