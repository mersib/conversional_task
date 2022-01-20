import React, { useState } from "react";

export default function H2(props) {
  return (
    <div>
      <div className="card p-fluid">
        <h2>{props.data.data.props.text}</h2>
      </div>
    </div>
  );
}
