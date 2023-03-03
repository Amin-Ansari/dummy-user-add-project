import "./InputStyle.css";
import Wrapper from "../Helpers/Wrapper";
const TextInput = (props) => {
  const liftTextToForm = (eventObject) => {
    props.onTakingData(eventObject.target.value);
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
        ></input>
      </label>
    </Wrapper>
  );
};

export default TextInput;
