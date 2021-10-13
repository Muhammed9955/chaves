import "./ChavsBody.styles.css";
import {
  chavsInfo,
  head3,
  head4,
  head7,
  head8,
  head9,
  membership as membershipData,
  missonStatement,
  project_utlits,
  PROJECT_VISION,
} from "../../data";
import ChavsInfo from "../ChavsInfo/ChavsInfo";
import Description from "../Description/Description";
import FirstLook from "../FirstLook/FirstLook";

interface Props {
  aboutUsRef: any;
  utilityRef: any;
  membership: any;
  missionStatement: any;
  visionRef: any;
}

const Chavs_body: React.FC<Props> = ({
  aboutUsRef,
  utilityRef,
  membership,
  missionStatement,
  visionRef,
}) => {
  return (
    <div className="chavsBody">
      <div className="sapcerTop" />
      <div ref={aboutUsRef}>
        <Description
          title={chavsInfo.title}
          paragraph={chavsInfo.paragraph}
          rightImg={true}
          img={head3}
        />
      </div>
      <div className="sapcer" />
      <div ref={utilityRef}>
        <Description
          title={project_utlits.title}
          paragraph={project_utlits.paragraph}
          rightImg={false}
          img={head4}
        />
      </div>
      <div className="sapcer" />
      <FirstLook />
      <div className="sapcer" />
      <div ref={membership}>
        <Description
          title={membershipData.title}
          paragraph={membershipData.paragraph}
          rightImg={true}
          img={head7}
        />
      </div>
      <div className="sapcer" />
      <div ref={visionRef}>
        <ChavsInfo
          title={PROJECT_VISION.title}
          paragraphList={PROJECT_VISION.paragraphList}
        />
      </div>
      <div className="sapcer" />
      <div ref={missionStatement}>
        <ChavsInfo
          title={missonStatement.title}
          paragraphList={missonStatement.paragraphList}
          smallWidth={true}
        />
      </div>
      <div className="sapcer" />
      <img src={head8} alt="head8" className="head8" />
      <img src={head9} alt="head9" className="head9" />
    </div>
  );
};
export default Chavs_body;
