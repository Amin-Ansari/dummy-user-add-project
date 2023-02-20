import "./App.css";
import Appwrapepr from "./components/AppWrapper";
import SectionWrapper from "./components/UI Components/SectionWrapper";
import TextInput from "./components/Data Components/TextInput";
import Form from "./components/UI Components/Form";
import AgeInput from "./components/Data Components/AgeInput";

function App() {
  return (
    <div className="App">
      <Appwrapepr>
        <SectionWrapper>
          <Form>
            <TextInput></TextInput>
            <AgeInput></AgeInput>
          </Form>
        </SectionWrapper>
        <SectionWrapper></SectionWrapper>
      </Appwrapepr>
    </div>
  );
}

export default App;
