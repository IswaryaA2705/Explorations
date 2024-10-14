import ReactDOM from 'react-dom'
function Modal({ onClose, children }) {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>,
      document.getElementById("modal-root") 
    );
  }
export default Modal;
