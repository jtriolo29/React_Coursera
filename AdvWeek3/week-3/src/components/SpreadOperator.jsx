import React from "react";
import "../App.css";

const Button = ({ type, children, ...btnProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...btnProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...btnProps }) => {
  return (
    <Button
      type="secondary"
      {...btnProps}  
      onClick={() => {
        alert("Logging In!");
      }}
      
    >
      {children}
    </Button>
  );
};

function SpreadOperator() {
  return (
    <div className="App">
      <h2>Using the Spread Operator</h2>
      <h3>Little Lemon Restaurant 🍕</h3>
      <Button type="primary" onClick={() => alert("Signing Up!")} location="House">
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing Up!")} sweet="Yes">
        Log In
      </LoginButton>
    </div>
  );
}
export default SpreadOperator;
