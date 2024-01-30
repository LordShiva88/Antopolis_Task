import "./Footer.css";
import Container from "../Container/Container";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <footer className="footer">
          <div className="logo-container">
            <h2 className="heading">Taste now</h2>
            <div className="socialIcon">
              <FaFacebookSquare />
              <FaTwitter />
              <FaInstagram />
              <IoLogoYoutube />
            </div>
          </div>

          <ul>
            <li>
              <a href="#">Taste now</a>
            </li>
            <li>
              <a href="#">Seslendirme ve Alt Jazz</a>
            </li>
            <li>
              <a href="#">Self Betimes</a>
            </li>
            <li>
              <a href="#">Yard Market</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Hedge Karla</a>
            </li>
            <li>
              <a href="#">Media Market</a>
            </li>
            <li>
              <a href="#">Yatırımcı İlişkileri</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Is İmkanları</a>
            </li>
            <li>
              <a href="#">Mullein Koşulları</a>
            </li>
            <li>
              <a href="#">Gillie</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Basal Himmler</a>
            </li>
            <li>
              <a href="#">Car Tercihleri</a>
            </li>
            <li>
              <a href="#">Autumnal Bulgier</a>
            </li>
            <li>
              <a href="#">Size Last</a>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
