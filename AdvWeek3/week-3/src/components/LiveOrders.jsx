import React from "react";
import "../App";

// The children are all of the p tags
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  //  cloneElement makes a copy of an element that we can then modify
  //  In this example we are copying each p tag and changing the styling 
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App">
      <h2>React.cloneElement & React.Children</h2>
      <h3>Each child p tag element, has had been cloned and modified</h3>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}
export default LiveOrders;
