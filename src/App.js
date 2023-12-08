import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Project from "./component/Project";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Project></Project>
    </>
  );
}

export default App;
