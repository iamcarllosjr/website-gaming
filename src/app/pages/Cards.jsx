import "./Cards.css";
import MetaSoccer from "../images/metasoccer.png"

const Cards = () => {
    return (
        <section className="section">
                <div className="title">
                    <ul className="list">
                        <li>Release</li>
                        <li>Release</li>
                        <li>Release</li>
                        <li>Release</li>
                        <li>Release</li>
                    </ul>
                </div>
            <div className="hero-container">

            <div className="card-container card-1">
              <div className="img-container">
               <img src={MetaSoccer} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Card Title</h2>
               </div>
              
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
               
              </div>

               <div className="btn-knowmore">
                <button><a href="">Know More</a></button>
               </div>
            </div>

            <div className="card-container card-2">
              <div className="img-container">
               <img src={MetaSoccer} alt="MetaSoccer Metaverse" />
              </div>

              <div className="card-content">
               <div className="card-title">
                <h2>Card Title</h2>
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
                <h2>Card Title</h2>
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