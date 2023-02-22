import TextInput from "../Data Components/TextInput";
import AgeInput from "../Data Components/AgeInput";
import { useState } from "react";
const Form = (props) => {
  const [userName, updateUserName] = useState("");
  const [userAge, updateAge] = useState("");
  const [userNameCondition, updateUserNameCondition] = useState(true);
  const [userAgeCondition, updateUserAgeCondition] = useState(true);
  const [validNumber, updatValidNumber] = useState(true);
  const [boxVisibility, updateVisibility] = useState(false);
  const takeData = (inputsData) => {
    updateUserName(inputsData);
  };
  const takeAge = (inputAge) => {
    updateAge(inputAge);
  };
  const messageContext = () => {
    // This function will return a message based on a certain condition
    if (!userNameCondition) {
      return "Username can't be empty";
    } else if (!userAgeCondition) {
      return "User age can't be empty";
    } else if (!validNumber) {
      return "The value which you've entered as user's age is not a valid (number)!";
    }
  };
  const formSubmission = (formEvent) => {
    formEvent.preventDefault();
    userName == ""
      ? updateUserNameCondition(false)
      : updateUserNameCondition(true);
    if (!userAge) {
      updateUserAgeCondition(false);
    } else {
      updateUserAgeCondition(true);
      if (typeof userAge === "number") {
        updatValidNumber(true);
      } else {
        updatValidNumber(false);
      }
    }
    userNameCondition && userAgeCondition && validNumber
      ? updateVisibility(false)
      : updateVisibility(true);
    !boxVisibility && props.onUpdate(userName, userAge);
    props.onTakingMessage(messageContext());
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
