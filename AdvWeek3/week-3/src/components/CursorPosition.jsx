import React, { useState, useEffect } from "react";
import "../App.css";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="RowData">
        <span>x: {mousePosition.x}</span>&nbsp;
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function CursorPosition() {
  return (
    <div className="App">
      <h2>Using Higher Order Components - HOC</h2>
      <h3>Little Lemon Restaurant 🍕</h3>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}
export default CursorPosition;
