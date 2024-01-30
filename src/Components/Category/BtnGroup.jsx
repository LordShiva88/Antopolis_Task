import icon1 from "../../assets/pizza.svg";
import icon2 from "../../assets/burgers.svg";
import icon3 from "../../assets/salad.svg";
import icon4 from "../../assets/combos.svg";

const BtnGroup = () => {
  return (
    <div className="btnFlex">
      <div className="activeBtn">
        <img src={icon1} alt="" />
        <p>Pizzas</p>
      </div>
      <div className="CategoryBtn">
        <img src={icon2} alt="" />
        <p>Pizzas</p>
      </div>
      <div className="CategoryBtn">
        <img src={icon3} alt="" />
        <p>Pizzas</p>
      </div>
      <div className="CategoryBtn">
        <img src={icon4} alt="" />
        <p>Pizzas</p>
      </div>
    </div>
  );
};

export default BtnGroup;
