import { useContext } from "react";
import About from "./component/About";
import Accordion from "./component/Accordion";
import Contact from "./component/Contact";
import { ThemeContext } from "./component/Context";
import Experience from "./component/Experience";
import GetInTouch from "./component/GetInTouch";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Portfoilio from "./component/Portfoilio";
import Toggle from "./component/Toggle";


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor: darkMode ? '#222' : '0a192f', color: darkMode && 'white'}} className="App">
      <Nav/>
      <Home/>
      <About/>
      <Accordion/>
      <Experience/>
      <Portfoilio/>
      <GetInTouch/>
      {/* <Contact/> */}
      {/* <Toggle/>  */}
    </div>
  );
}

export default App;
