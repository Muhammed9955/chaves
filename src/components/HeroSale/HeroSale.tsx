import "./heroSale.css";
import { head10, head11 } from "../../data";
import MainButton from "../MainBtn/MainBtn";
import Title from "../Title/Title";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

interface Props {}

const HeroSale: React.FC<Props> = () => {
  const [Sale, setSale] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="heroSale">
      {Sale ? (
        <div className="">
          <div className="centerText">
            <Title text="CRYPTO HEROS AND VILLAINS" bgFont={true} />
            <br />
            <p style={{ fontSize: "1.3rem" }}>Sale is now live!</p>
            <div style={{ marginTop: "10vh" }} />
            <MainButton text="Buy now" orangeHover />
          </div>
        </div>
      ) : (
        <div className="">
          <div className="centerText">
            <Title text="CRYPTO HEROS AND VILLAINS" bgFont={true} />
            <br />
            <p>Minting will begin at 20:00 UTC on the 16th of November 2021</p>
            <div style={{ marginTop: "15vh" }} />
            <Link to="/">
              <MainButton text="Back to home" orangeHover />
            </Link>
          </div>
        </div>
      )}
      <img src={head10} alt="head1" className="head1" />
      <img src={head11} alt="head2" className="head2" />
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};
export default HeroSale;
