import "./InputStyle.css";
import Wrapper from "../Helpers/Wrapper";
import { useRef } from "react";

const TextInput = (props) => {
  const inputElement = useRef();
  const liftTextToForm = (eventObject) => {
    props.onTakingData(inputElement.current.value);
    console.log(inputElement.current.value);
  };
  return (
    <Wrapper>
      <label className="label-style">
        Username
        <input
          type={"text"}
          className={"input-styles"}
          onChange={liftTextToForm}
          value={props.value}
          ref={inputElement}
        ></input>
      </label>
    </Wrapper>
  );
};

export default TextInput;
