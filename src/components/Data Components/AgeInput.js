import "./InputStyle.css";
import { useRef } from "react";

const AgeInput = (props) => {
  const inputElement = useRef();
  const liftUpAge = (eventObject) => {
    props.onTakingData(Number(inputElement.current.value));
  };
  return (
    <div>
      <label className="label-style">
        Age (Years)
        <input
          type={"number"}
          min={"18"}
          max={55}
          className={"input-styles"}
          onChange={liftUpAge}
          value={props.value}
          ref={inputElement}
        ></input>
      </label>
    </div>
  );
};

export default AgeInput;
