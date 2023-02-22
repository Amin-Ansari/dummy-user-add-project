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
  const formSubmission = (formEvent) => {
    formEvent.preventDefault();
    userName == ""
      ? updateUserAgeCondition(false)
      : updateUserAgeCondition(true);
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
