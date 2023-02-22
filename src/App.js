import "./App.css";
import Appwrapepr from "./components/AppWrapper";
import SectionWrapper from "./components/UI Components/SectionWrapper";
import Form from "./components/UI Components/Form";
import ItemsList from "./components/UI Components/ItemsList";
import ListItem from "./components/Data Components/ListItem";
import AddUserButton from "./components/Data Components/AddUserButton";
import { useState } from "react";

function App() {
  const [userList, updateList] = useState([]);
  const updateUserList = (passedName, passedAge) => {
    updateList((prevValues) => {
      const prevList = [...prevValues];
      prevList.push({ userName: passedName, userAge: passedAge });
      return [...prevList];
    });
  };
  return (
    <div className="App">
      <Appwrapepr>
        <SectionWrapper>
          <Form onUpdate={updateUserList}>
            <AddUserButton></AddUserButton>
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
