import React, { Children, cloneElement } from "react";
import "../RadioStyle.css";

export function RadioGroup({ onChange, selected, children }) {
  const RadioOptions = Children.map(children, (child) => {
    return cloneElement(child, {
      checked: child.props.value === selected,
      onChange: onChange,
    });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
}

//  NOTE:  Functions are not valid as a React child
export const RadioOption = ({ value, checked, onChange, children }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
