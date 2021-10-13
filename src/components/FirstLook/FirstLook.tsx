import "./firstLook.css";
import { head4, head5, head6, img } from "../../data";
import MainButton from "../MainBtn/MainBtn";
import Title from "../Title/Title";

interface Props {}

const FirstLook: React.FC<Props> = (props) => {
  return (
    <div className="firstLook">
      <div className="center">
        <Title text="first Look" />
        <br />
        <MainButton text="BUY NOW" bg="orange" />
      </div>
      <br />
      <br />
      <div className="imgs">
        <img src={head5} alt="img" className="fl_img" />
        <img src={head4} alt="img" className="fl_img" />
        <img src={head6} alt="img" className="fl_img" />
      </div>
    </div>
  );
};
export default FirstLook;
