import Red1 from "../images/Red1.png";
import Red2 from "../images/Red2.png";
import "./Red.css";

const Red = (props) => {
  return (
    <div className="red">
      <img className="redimg1" src={Red1} />
      <img className="redimg2" src={Red2} />
    </div>
  );
};

export default Red;
