import "./InputStyle.css";

const AgeInput = () => {
  return (
    <div>
      <label className="label-style">
        Age (Years)
        <input
          type={"number"}
          min={"18"}
          max={55}
          className={"input-styles"}
        ></input>
      </label>
    </div>
  );
};

export default AgeInput;
