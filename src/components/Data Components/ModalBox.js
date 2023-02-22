import "./ModalBox.css";

const ModalBox = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <header className="modal-header">Invalid input</header>
        <div className="modal-body">
          <p className="modal-message"></p>
          <div className="modal-button-container">
            <button className="modal-button">Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
