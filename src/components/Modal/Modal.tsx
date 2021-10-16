import { useState } from "react";
import Title from "../Title/Title";
import "./modal.css";
import mint from "../../assets/mint.svg";
import { IoMdClose } from "react-icons/io";

interface Props {
  setShowModal: Function;
}

const Modal: React.FC<Props> = ({ setShowModal }) => {
  const [successfullMint, setSuccessfullMint] = useState(true);
  return (
    <div className="modal">
      {!successfullMint ? (
        <div className="modalHeader">
          <Title text="Chaves" size="md" />{" "}
        </div>
      ) : (
        <div className="modalHeader">
          <Title text="Mint your Chaves" size="md" />
          <p>6798/10,000 CHAVS minted</p>
        </div>
      )}

      <br />

      {successfullMint ? (
        <div className="modal_body">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              className="modalInput "
              placeholder="Enter mint quantity "
            />
            <div style={{ display: "flex", margin: "1rem auto" }}>
              <img src={mint} alt="mint" className="mr_m" />
              <p style={{ color: "#FF7D00" }}>0.05 ETH + Gas</p>
            </div>
          </div>
          <button className="modalBtn">mint</button>
        </div>
      ) : (
        <div style={{ color: "black", textAlign: "center" }}>
          <Title text="CONGRATULATIONS" size="md" />
          <p>Your mint was successful!</p>
        </div>
      )}
      <IoMdClose className="modal_Icon" onClick={() => setShowModal(false)} />
    </div>
  );
};
export default Modal;
