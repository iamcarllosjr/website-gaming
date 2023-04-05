import "./Cards.css";
import MetaSoccer from "../images/metasocc.jpg"
import Illuvium from "../images/illuvium.png"
import Galaxy from "../images/galaxy.png"


const Cards = () => {
    return (
        <section className="section">
                <div className="title">
                    <h1>Top Games</h1>
                </div>
            <div className="hero-container">

            <div className="card-container card-1">
              <div className="img-container">
               <img src={Illuvium} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Illuvium</h2>
               </div>
              
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-2">
              <div className="img-container">
               <img src={Galaxy} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Galaxy Fight</h2>
               </div>
               <div className="card-body">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               </div>
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-3">
              <div className="img-container">
               <img src={MetaSoccer} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>MetaSoccer</h2>
               </div>
               <div className="card-body">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               </div>
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-4">
              <div className="img-container">
               <img src={Illuvium} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Illuvium</h2>
               </div>
              
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-5">
              <div className="img-container">
               <img src={Galaxy} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Galaxy Fight</h2>
               </div>
               <div className="card-body">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               </div>
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-6">
              <div className="img-container">
               <img src={MetaSoccer} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>MetaSoccer</h2>
               </div>
               <div className="card-body">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               </div>
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>


            </div>
       </section>
    )
}
export default Cards;