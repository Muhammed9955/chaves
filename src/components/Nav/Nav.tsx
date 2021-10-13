import "./nav.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Title from "../Title/Title";

interface Props {
  scrollToUtility: any;
  scrollToAboutUs: any;
  scrollToMembership: any;
  scrollToMissionStatement: any;
  homeRef: any;
}

const Nav: React.FC<Props> = ({
  scrollToUtility,
  scrollToAboutUs,
  scrollToMembership,
  scrollToMissionStatement,
  homeRef,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="" ref={homeRef}>
      <div className="nav">
        <h2>chavs</h2>
        <div className="routes">
          <p className="mr_m " onClick={() => scrollToAboutUs()}>
            about
          </p>
          <p className="mr_m " onClick={() => scrollToUtility()}>
            utility
          </p>
          <p className="mr_m " onClick={() => scrollToMembership()}>
            membership
          </p>
          <p className="mr_m " onClick={() => scrollToMissionStatement()}>
            misson statement
          </p>
        </div>
        <div className="routes">
          <SiDiscord className="mr_m icon" />
          <AiOutlineInstagram className="mr_m icon" />
          <AiOutlineTwitter className="mr_m icon" />
        </div>
      </div>

      <div className="nav_mob">
        <div className="nav_mob">
          <Title text="chavs" />{" "}
          {show ? (
            <IoMdClose className="navMob_icon" onClick={() => setShow(!show)} />
          ) : (
            <FiMenu className="navMob_icon" onClick={() => setShow(!show)} />
          )}
        </div>
        <div className={show ? "nav_menu active" : "nav_menu"}>
          <div
            style={{
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className="navMob_item" onClick={() => scrollToAboutUs()}>
              about
            </p>
            <p className="navMob_item" onClick={() => scrollToUtility()}>
              utility
            </p>
            <p className="navMob_item" onClick={() => scrollToMembership()}>
              membership
            </p>
            <p
              className="navMob_item"
              onClick={() => scrollToMissionStatement()}
            >
              misson statement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
