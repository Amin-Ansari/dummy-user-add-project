import "./ModalBox.css";

const ModalBox = (props) => {
  const resetTheContent = () => {
    props.onMessageFeedback("");
  };
  return (
    <div
      className="modal-container"
      style={{
        display: props.content ? "flex" : "none",
      }}
    >
      <div className="modal-box">
        <header className="modal-header">Invalid input</header>
        <div className="modal-body">
          <p className="modal-message">{props.content}</p>
          <div className="modal-button-container">
            <button className="modal-button" onClick={resetTheContent}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
