import "./News.css";
import Tournaments from "../images/tournaments.jpeg";

const News = () => {
    return (
        <section className="section">
            <div className="news-container">
                <div className="news-title">
                    <h1>Events</h1>
                </div>
            <div className="news-cards">

                <div className="news-card-1">
                    <div className="img">
                        <img src={Tournaments} alt="" />
                    </div>
                    <div className="news-card-content">
                        <div className="card-title">
                            <h1>Events</h1>
                              <p className="data">
                                12/12/2023
                              </p>
                        </div>
                    <div className="news-button">
                        <button>More Information</button>
                    </div>
                    </div>
                </div>

                <div className="news-card-1">
                    <div className="img">
                        <img src={Tournaments} alt="" />
                    </div>
                    <div className="news-card-content">
                        <div className="card-title">
                            <h1>Events</h1>
                              <p className="data">
                                12/12/2023
                              </p>
                        </div>
                    <div className="news-button">
                        <button>More Information</button>
                    </div>
                    </div>
                </div>
                
             </div>
            </div>
        </section>
    )
}

export default News;