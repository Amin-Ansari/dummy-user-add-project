import TextInput from "../Data Components/TextInput";
import AgeInput from "../Data Components/AgeInput";
import { useState } from "react";
const Form = (props) => {
  const [userName, updateUserName] = useState("");
  const [userAge, updateAge] = useState("");
  const takeData = (inputsData) => {
    updateUserName(inputsData);
  };
  const takeAge = (inputAge) => {
    updateAge(inputAge);
  };
  const formSubmission = (formEvent) => {
    formEvent.preventDefault();
    userName == "" ? alert("Username can't be empty") : alert(userName);
    if (!userAge) {
      alert("User age can't be empty");
    } else {
      if (typeof userAge === "number") {
        alert(userAge);
      } else {
        alert("The passed data as user's age is not a valid (number)!");
      }
    }
    props.onUpdate(userName, userAge);
    updateUserName("");
    updateAge("");
  };
  return (
    <div>
      <form onSubmit={formSubmission}>
        <TextInput onTakingData={takeData} value={userName}></TextInput>
        <AgeInput onTakingData={takeAge} value={userAge}></AgeInput>
        {props.children}
      </form>
    </div>
  );
};

export default Form;
