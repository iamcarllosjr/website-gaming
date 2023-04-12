import { Navbar, Sliders, Footer } from "../shared/components";
import "./Home.css"
import Form from "./Form";
import Cards from "./Cards";
import News from "./News";

const Home = () => {
    return (
        <section>
           <Navbar />

           <div className="home">
              <Sliders />
              <Cards />
              <News />
              <Form />
              <Footer />

              
           </div>
       </section>
    )
}

export default Home;