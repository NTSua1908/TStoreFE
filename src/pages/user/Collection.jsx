import React from "react";

import "./collection.scss";

function Collection(props) {
  return (
    <div className="Collection">
      <div className="Collection_address"></div>
      <div className="Collection_filterbar"></div>
      <div className="Collection_container">
        <div className="Collection_container-menu"></div>
        <div className="Collection_container-content"></div>
      </div>
    </div>
  );
}

export default Collection;
