import React from "react";

const SharedComponent = ({ counter }) => (
  <h4 style={{ background: "#deae8b", padding: "10px" }}>
    Remote 1: Current count - {counter}
  </h4>
);

export default SharedComponent;
