import { head1, head2 } from "../../data";
import MainButton from "../MainBtn/MainBtn";
import Title from "../Title/Title";
import "./hero.css";
interface Props {}

const Hero: React.FC<Props> = (props) => {
  return (
    <div className="hero">
      <div className="centerText">
        <Title text="CRYPTO HEROS AND VILLAINS" />
      </div>
      <br />
      <p>Choose from 10,000</p>
      <br />
      <p>unique and randomly</p>
      <br />
      <p>generated NFTs</p>
      <br />
      <br />
      <br />
      <MainButton text="BUY NOW" />
      <img src={head1} alt="head1" className="head1" />
      <img src={head2} alt="head2" className="head2" />
    </div>
  );
};
export default Hero;
