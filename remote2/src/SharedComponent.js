import React from "react";

const SharedComponent = ({ counter }) => (
  <h4 style={{ background: "red", padding: "10px" }}>
    Remote 2: Current count - {counter}
  </h4>
);

export default SharedComponent;
