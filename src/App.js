import "./App.css";
import Appwrapepr from "./components/AppWrapper";
import SectionWrapper from "./components/UI Components/SectionWrapper";
import TextInput from "./components/Data Components/TextInput";
import Form from "./components/UI Components/Form";
import AgeInput from "./components/Data Components/AgeInput";
import ItemsList from "./components/UI Components/ItemsList";
import ListItem from "./components/Data Components/ListItem";
import { useState } from "react";

function App() {
  const [userList, updateList] = useState([]);
  return (
    <div className="App">
      <Appwrapepr>
        <SectionWrapper>
          <Form>
            <TextInput></TextInput>
            <AgeInput></AgeInput>
          </Form>
        </SectionWrapper>
        <SectionWrapper>
          <ItemsList>
            {userList.map((item, index) => (
              <ListItem
                userName={item.userName}
                userAge={item.userAge}
                key={index}
              ></ListItem>
            ))}
          </ItemsList>
        </SectionWrapper>
      </Appwrapepr>
    </div>
  );
}

export default App;
