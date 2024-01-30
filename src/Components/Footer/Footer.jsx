import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Container>
        <footer className="footer">

            <div className="logo-container">
              <img src="your-logo.png" alt="Logo" />
            </div>
            <div className="links-container">
              <ul className="footer-links">
                <div>
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
                </div>
                <div>
                  <li>
                    <a href="#">Hedge Karla</a>
                  </li>
                  <li>
                    <a href="#">Media Market</a>
                  </li>
                  <li>
                    <a href="#">Yatırımcı İlişkileri</a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href="#">Is İmkanları</a>
                  </li>
                  <li>
                    <a href="#">Mullein Koşulları</a>
                  </li>
                  <li>
                    <a href="#">Gillie</a>
                  </li>
                </div>
                <div>
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
                </div>
              </ul>
            </div>

        </footer>
      </Container>
    </div>
  );
};

export default Footer;
