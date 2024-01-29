import bannerImg from "../../assets/Food Background 2 1.png";
import bannerImg2 from "../../assets/Splash food 1.png";
import "./Banner.css";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="leftSideBanner">
          <h1 className="headingText">
            Experience Food <span className="redText">Delivery</span> Like Never Before
          </h1>
          <p className="commonText">
            Indulge in the finest cuisines from top restaurants delivered to your doorstep. Our swift service ensures you get what you crave, whenever you crave it. Download the app now to embark on a culinary journey!
          </p>
        </div>
        <div className="rightSideBanner">
          <div className="bannerImg">
            <img src={bannerImg} alt="Delicious Food" className="absolute" />
            <img src={bannerImg2} alt="Food Splash" className="absolute" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
