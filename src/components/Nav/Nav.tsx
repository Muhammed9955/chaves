import "./nav.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Title from "../Title/Title";

interface Props {
  scrollToUtility?: any;
  scrollToAboutUs?: any;
  scrollToMembership?: any;
  scrollToMissionStatement?: any;
  scrollToVision?: any;
  homeRef?: any;
  mintNav?: any;
}

const Nav: React.FC<Props> = ({
  scrollToUtility,
  scrollToAboutUs,
  scrollToMembership,
  scrollToMissionStatement,
  scrollToVision,
  homeRef,
  mintNav,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="" ref={homeRef}>
      <div className="nav">
        {/* <Link to="/"> */}
        <h2>chavs</h2>
        {/* </Link> */}
        {!mintNav && (
          <div className="routes">
            <p className="mr_m navItem" onClick={() => scrollToAboutUs()}>
              about
            </p>
            <p className="mr_m navItem" onClick={() => scrollToUtility()}>
              utility
            </p>
            <p className="mr_m navItem" onClick={() => scrollToMembership()}>
              membership
            </p>
            <p className="mr_m navItem" onClick={() => scrollToVision()}>
              Vision
            </p>
            <p
              className="mr_m navItem"
              onClick={() => scrollToMissionStatement()}
            >
              misson statement
            </p>
          </div>
        )}
        <div className="icons">
          <a href="http://discord.gg/QgjVarh9fe" className="mr_m icon">
            <SiDiscord />
          </a>
          <a href="http://instagram.com/chavsio" className="mr_m icon">
            <AiOutlineInstagram />
          </a>
          <a href="http://twitter.com/chavsio" className="mr_m icon">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>

      <div className="nav_mob">
        <div className="nav_mob">
          <Title text="chavs" />

          {!mintNav && (
            <div className="">
              {show ? (
                <IoMdClose
                  className="navMob_icon"
                  onClick={() => setShow(!show)}
                />
              ) : (
                <FiMenu
                  className="navMob_icon"
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          )}
        </div>

        {!mintNav && (
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
              <p className="navMob_item" onClick={() => scrollToVision()}>
                Vision
              </p>
              <p
                className="navMob_item"
                onClick={() => scrollToMissionStatement()}
              >
                misson statement
              </p>
            </div>
            <div className="icons">
              <a href="http://discord.gg/QgjVarh9fe" className="mr_m icon">
                <SiDiscord />
              </a>
              <a href="http://instagram.com/chavsio" className="mr_m icon">
                <AiOutlineInstagram />
              </a>
              <a href="http://twitter.com/chavsio" className="mr_m icon">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
