import Home from "./Components/Pages/Home";
import Header from "./Components/Pages/Header";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import Works from "./Components/Pages/Works";
import Contact from "./Components/Pages/Contact";
import "./Components/Css/ResetDefaultValue.css";
import "./Components/Css/Home.css";
import "./Components/Css/About.css";
import "./Components/Css/Skills.css";
import "./Components/Css/Header.css";
import "./Components/Css/Works.css";
import "./Components/Css/Contact.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
