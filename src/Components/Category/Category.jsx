import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Category.css";
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../Container/Container";

import pizza1 from "../../assets/pizza-1.png";
import pizza2 from "../../assets/pizza-2.png";
import pizza3 from "../../assets/pizza-3.png";
import pizza4 from "../../assets/pizza-4.png";
import star from "../../assets/Star 6.svg";
import vector from "../../assets/Vector 616.svg";
import BtnGroup from "./BtnGroup";

const Category = () => {
  const cards = [
    {
      id: 1,
      image: pizza1,
      title: "Pepperoni Pizza",
      description: "Di Napoli",
      price: "$11.99",
    },
    {
      id: 2,
      image: pizza2,
      title: "Vegetarian Pizza",
      description: "Fresh veggies",
      price: "$13.99",
    },
    {
      id: 3,
      image: pizza3,
      title: "Margherita Pizza",
      description: "Classic delight",
      price: "$10.99",
    },
    {
      id: 4,
      image: pizza4,
      title: "Hawaiian Pizza",
      description: "Ham and pineapple",
      price: "$12.99",
    },
    {
      id: 4,
      image: pizza4,
      title: "Hawaiian Pizza",
      description: "Ham and pineapple",
      price: "$12.99",
    },
    {
      id: 4,
      image: pizza4,
      title: "Hawaiian Pizza",
      description: "Ham and pineapple",
      price: "$12.99",
    },
  ];

  return (
    <Container>
      <h1 className="headingText">
        Our Popular <span className="redText">Categories</span>
      </h1>
      <BtnGroup />
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div>
              <div className="card">
                <figure>
                  <img src={card.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{card.title}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Category;
