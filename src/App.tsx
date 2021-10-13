import { useRef } from "react";
import "./App.css";
import ChavsBody from "./components/ChavsBody/ChavsBody";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

function App() {
  //routes refs
  const homeRef: React.MutableRefObject<any> = useRef(null);
  const aboutUsRef: React.MutableRefObject<any> = useRef(null);
  const utilityRef: React.MutableRefObject<any> = useRef(null);
  const membership: React.MutableRefObject<any> = useRef(null);
  const missionStatement: React.MutableRefObject<any> = useRef(null);

  // routes func
  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToUtility = () =>
    utilityRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutUs = () =>
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToMembership = () =>
    membership.current.scrollIntoView({ behavior: "smooth" });
  const scrollToMissionStatement = () =>
    missionStatement.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Nav
        scrollToUtility={scrollToUtility}
        scrollToAboutUs={scrollToAboutUs}
        scrollToMembership={scrollToMembership}
        scrollToMissionStatement={scrollToMissionStatement}
        homeRef={homeRef}
      />
      <Hero />
      <ChavsBody
        aboutUsRef={aboutUsRef}
        utilityRef={utilityRef}
        membership={membership}
        missionStatement={missionStatement}
      />
      <Footer scrollToHome={scrollToHome} />
    </div>
  );
}

export default App;
