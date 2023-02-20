import "./InputStyle.css";

const TextInput = () => {
  return (
    <div>
      <label className="label-style">
        Username
        <input type={"text"} className={"input-styles"}></input>
      </label>
    </div>
  );
};

export default TextInput;
