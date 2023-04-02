// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Images
import creed from "./../../images/assassinscreed.png"
import fortnite from "./../../images/fortnite.png"
import freefire from "./../../images/freefire.png"
import gta from "./../../images/gta-v.png"
import halo from "./../../images/halo5.png"
import lol from "./../../images/league-of-legends.png"
import rdr from "./../../images/red-dead-redemption-2.png"
import zelda from "./../../images/zelda.png"

// Import Swiper styles
import "./Sliders.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Sliders = () => {

    const slides = [creed, fortnite, freefire, gta, halo, lol, rdr, zelda];

  return (
    <div className="container">
    <Swiper className='swiper'
     modules={[Navigation, Pagination, Autoplay]}
     loop
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     autoplay={{delay: 1500}}
     grabCursor={true}
    >
      {slides.map(slide => (
        <SwiperSlide>
            <img src={slide} alt={slides} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Sliders;