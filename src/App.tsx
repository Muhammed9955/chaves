import { useRef } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Mint from "./pages/Mint";

function App() {
  //routes refs
  const homeRef: React.MutableRefObject<any> = useRef(null);
  const aboutUsRef: React.MutableRefObject<any> = useRef(null);
  const utilityRef: React.MutableRefObject<any> = useRef(null);
  const membership: React.MutableRefObject<any> = useRef(null);
  const missionStatement: React.MutableRefObject<any> = useRef(null);
  const visionRef: React.MutableRefObject<any> = useRef(null);

  // routes func
  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToUtility = () =>
    utilityRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutUs = () =>
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToMembership = () =>
    membership.current.scrollIntoView({ behavior: "smooth" });
  const scrollToVision = () =>
    visionRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToMissionStatement = () =>
    missionStatement.current.scrollIntoView({ behavior: "smooth" });
  // console.log({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav
              scrollToUtility={scrollToUtility}
              scrollToAboutUs={scrollToAboutUs}
              scrollToMembership={scrollToMembership}
              scrollToVision={scrollToVision}
              scrollToMissionStatement={scrollToMissionStatement}
              homeRef={homeRef}
            />
            <Home
              aboutUsRef={aboutUsRef}
              utilityRef={utilityRef}
              membership={membership}
              missionStatement={missionStatement}
              visionRef={visionRef}
            />
            <Footer scrollToHome={scrollToHome} />
          </Route>
          <Route exact path="/mint">
            <Nav mintNav={true} />
            <Mint />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
