import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Category.css";
import { Pagination } from "swiper/modules";
import Container from "../Container/Container";

import pizza1 from "../../assets/pizza-1.png";
import pizza2 from "../../assets/pizza-2.png";
import pizza3 from "../../assets/pizza-3.png";
import pizza4 from "../../assets/pizza-4.png";
import star from "../../assets/Star 6.svg";
import vector from "../../assets/Vector 616.svg";

const Category = () => {

  const cards = [
    {
      "id": 1,
      "image": "path/to/image1.jpg",
      "title": "Nature Beauty",
      "name": "John Doe"
    },
    {
      "id": 2,
      "image": "path/to/image2.jpg",
      "title": "City Lights",
      "name": "Jane Smith"
    },
    {
      "id": 3,
      "image": "path/to/image3.jpg",
      "title": "Mountain Serenity",
      "name": "Alex Johnson"
    },
    {
      "id": 4,
      "image": "path/to/image4.jpg",
      "title": "Ocean Bliss",
      "name": "Emily Brown"
    }
  ]

  return (
    <Container>
      <h1 className="headingText ">Our Popular <span className="redText">Categories</span></h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cards.map(car)}
      </Swiper>
    </Container>
  );
};

export default Category;
