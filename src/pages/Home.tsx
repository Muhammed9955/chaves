import { useState } from "react";
import ChavsBody from "../components/ChavsBody/ChavsBody";
import Hero from "../components/Hero/Hero";
import HeroSale from "../components/HeroSale/HeroSale";

interface Props {
  aboutUsRef: any;
  utilityRef: any;
  membership: any;
  missionStatement: any;
  visionRef: any;
}
const Home: React.FC<Props> = ({
  aboutUsRef,
  utilityRef,
  membership,
  missionStatement,
  visionRef,
}) => {
  return (
    <div className="App">
      <Hero />
      <ChavsBody
        aboutUsRef={aboutUsRef}
        utilityRef={utilityRef}
        membership={membership}
        missionStatement={missionStatement}
        visionRef={visionRef}
      />
    </div>
  );
};

export default Home;
