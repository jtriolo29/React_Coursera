import { useState, useEffect } from "react";

function WindowWidthWith() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Handler Created with useEffect");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function: Removes the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Handler Killed with useEffect cleanup");
    };
  }, []);
  // Empty dependency array ensures this effect runs once when the component
  // mounts and cleans up when it unmounts

  return <div>With useEffect Window width is: {width}</div>;
}

// UNCOMMENT TO SEE HOW MANY MORE TIMES AN EVENTLISTENER IS CREATED
/* function WindowWidthWO() {
  const [width, setWidth] = useState(window.innerWidth);

  // Without useEffect, this is problematic!
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    console.log("Handler Created without useEffect");
  });

  return <div>Without useEffect Window width is: {width}</div>;
} */

function WindowWidthDisplay() {
  return (
    <>
      {/* <WindowWidthWO /> */}
      <WindowWidthWith />
    </>
  );
}
export default WindowWidthDisplay;

//  Use the console in Dev Tools to see the difference between the number of
//  calls to create event handlers between using useEffect and not using useEffect
//  when resizing the window width.  It's created hundreds of times more and the
//  eventListener is never removed.
