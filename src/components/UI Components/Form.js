import TextInput from "../Data Components/TextInput";
import AgeInput from "../Data Components/AgeInput";

const Form = (props) => {
  return (
    <div>
      <form>
        <TextInput></TextInput>
        <AgeInput></AgeInput>
        {props.children}
      </form>
    </div>
  );
};

export default Form;
