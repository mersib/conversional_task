import React, { useState } from "react";

export default function H1(props) {
  return (
    <div>
      <div className="card p-fluid">
        <h1>{props.data.data.props.text}</h1>
      </div>
    </div>
  );
}
