import React, { useState } from "react";
import "../App.css";

const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      {children}
    </button>
  );
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = ({ onClose }) => {
  return (
    <Button backgroundColor="red" onClick={onClose}>
      Delete Modal
    </Button>
  );
};

function ChildrenDemo() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="App">
      <h2>Little Lemon Restaurant</h2>
      <button onClick={() => setShowAlert(true)}>Show Modal</button>
      {showAlert && (
        <Alert>
          <h4>Delete Modal</h4>
          <p>Are you sure?</p>
          <DeleteButton onClose={() => setShowAlert(false)} />
        </Alert>
      )}
    </div>
  );
}
export default ChildrenDemo;
