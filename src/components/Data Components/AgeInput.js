import "./InputStyle.css";

const AgeInput = (props) => {
  const liftUpAge = (eventObject) => {
    props.onTakingData(Number(eventObject.target.value));
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
        ></input>
      </label>
    </div>
  );
};

export default AgeInput;
