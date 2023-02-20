import "./App.css";
import Appwrapepr from "./components/AppWrapper";
import SectionWrapper from "./components/UI Components/SectionWrapper";

function App() {
  return (
    <div className="App">
      <Appwrapepr>
        <SectionWrapper></SectionWrapper>
        <SectionWrapper></SectionWrapper>
      </Appwrapepr>
    </div>
  );
}

export default App;
