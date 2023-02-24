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
    let errorMessage = "";
    if (!userName) {
      errorMessage = "The username field can't be empty";
    } else if (!userAge) {
      errorMessage = "The user age field can't be empty";
    }
    if (errorMessage == "") props.onUpdate(userName, userAge);
    props.onTakingMessage(errorMessage);
    updateUserName("");
    updateAge("");
    errorMessage = "";
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
