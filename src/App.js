import "./App.css";
import Appwrapepr from "./components/AppWrapper";
import SectionWrapper from "./components/UI Components/SectionWrapper";
import Form from "./components/UI Components/Form";
import ItemsList from "./components/UI Components/ItemsList";
import ListItem from "./components/Data Components/ListItem";
import AddUserButton from "./components/Data Components/AddUserButton";
import ModalBox from "./components/Data Components/ModalBox";
import { useState } from "react";

function App() {
  const [userList, updateList] = useState([]);
  const [modalMessage, updateMessage] = useState("");
  const updateUserList = (passedName, passedAge) => {
    updateList((prevValues) => {
      const prevList = [...prevValues];
      prevList.push({ userName: passedName, userAge: passedAge });
      return [...prevList];
    });
  };
  const setTheBoxMessage = (passedMessage) => {
    updateMessage(passedMessage);
    console.log(passedMessage);
  };
  return (
    <div className="App">
      <ModalBox></ModalBox>
      <Appwrapepr>
        <SectionWrapper>
          <Form onUpdate={updateUserList} onTakingMessage={setTheBoxMessage}>
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
