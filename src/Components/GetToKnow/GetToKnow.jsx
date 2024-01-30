import img1 from "../../assets/section-1.png";
import img2 from "../../assets/section-2.png";
import Container from "../Container/Container";
import "./GetToKnow.css";

const GetToKnow = () => {
  return (
    <Container>
      <div className="mainContainer">
        <h2 className="getToHeading headingText">
          Get to know <span className="redText">us</span>
        </h2>
        <div className="getToKnowContainer">
          <div className="gridItem">
            <div className="imgBox">
              <img src={img1} alt="" />
            </div>
            <div className="contentBox">
              <h2 className="getToHeading headingText">
                <span className="redText">Teamwork</span> is the key to our
                success
              </h2>
              <p className="commonText">
                At TasteNow, we make sure that every decision is determined by a
                team of us. Everyone&rsquo;s opinion matters, and as a group, we
                are stronger. We firmly believe that teamwork makes the dream
                work.
              </p>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBox">
              <img src={img2} alt="" />
            </div>
            <div className="contentBox">
              <h2 className="getToHeading headingText">
                We are all in for the{" "}
                <span className="redText">environment</span>
              </h2>
              <p>
                TasteNow donates $1 penny for every purchase made from the app
                to an organization that takes care of our environment. We
                believe that with everyone&rsquo;s help, we can make a better
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetToKnow;
