import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalToggle} from "../actions"; 
import {Navigation, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import slide1 from "../images/image-product-1.jpg";
import slide2 from "../images/image-product-2.jpg";
import slide3 from "../images/image-product-3.jpg";
import slide4 from "../images/image-product-4.jpg";
import slide1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import slide2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import slide3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import slide4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import 'swiper/swiper-bundle.min.css';
import "../styles/ProductCarousel.scss";

function ProductCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const openModal = useSelector(state => state.modalPopup); 
  const dispatch = useDispatch(); 
 
  return (
    <div className={`product-carousels ${openModal ? "active" : ""}`}>
      <Swiper onClick={() => dispatch(modalToggle())} className={`product-carousel-main ${openModal ? "active" : ""}`} modules={[Navigation, Thumbs]} thumbs={{swiper: thumbsSwiper}} navigation breakpoints={{720:{spaceBetween:28}}}>
        <SwiperSlide><img src={slide1} alt="front view of both shoes" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="back view of both shoes" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="front view of one shoe, on 2 large pebbles" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="side view of one shoe, on 2 large pebbles" /></SwiperSlide>    
      </Swiper>
     
      <Swiper className='product-carousel-thumbs' slidesPerView={"auto"} modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}>
        <SwiperSlide><img src={slide1Thumbnail} alt="front view of both shoes" /></SwiperSlide>
        <SwiperSlide><img src={slide2Thumbnail} alt="back view of both shoes" /></SwiperSlide>
        <SwiperSlide><img src={slide3Thumbnail} alt="front view of one shoe, on 2 large pebbles" /></SwiperSlide>
        <SwiperSlide><img src={slide4Thumbnail} alt="side view of one shoe, on 2 large pebbles" /></SwiperSlide>     
      </Swiper>
    </div>
  )
}

export default ProductCarousel
