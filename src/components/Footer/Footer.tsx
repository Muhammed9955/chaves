import "./Footer.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import MainButton from "../MainBtn/MainBtn";
import Title from "../Title/Title";

interface Props {
  scrollToHome: any;
}

const Footer: React.FC<Props> = ({ scrollToHome }) => {
  return (
    <div className="footer">
      <div className="flex">
        <div className="routes">
          <SiDiscord className="mr_m icon" />
          <AiOutlineInstagram className="mr_m icon" />
          <AiOutlineTwitter className="mr_m icon" />
        </div>
        <Title text="chavs" />
        <MainButton text="BUY NOW" />
      </div>
      <div className="hr" />
      <div className="flex_bottom">
        <p className="copyright">Copyright Crypto Heroes and Villains</p>
        <p className="icon " onClick={() => scrollToHome()}>
          Back to top
        </p>
      </div>
    </div>
  );
};
export default Footer;
