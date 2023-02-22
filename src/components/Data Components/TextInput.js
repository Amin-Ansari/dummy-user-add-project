import "./InputStyle.css";

const TextInput = (props) => {
  const liftTextToForm = (eventObject) => {
    props.onTakingData(eventObject.target.value);
  };
  return (
    <div>
      <label className="label-style">
        Username
        <input
          type={"text"}
          className={"input-styles"}
          onChange={liftTextToForm}
          value={props.value}
        ></input>
      </label>
    </div>
  );
};

export default TextInput;
