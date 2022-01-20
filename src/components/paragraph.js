import React, { useState } from "react";

export default function Paragraph(props) {
  return (
    <div>
      <div className="card p-fluid">
        <p>{props.data.data.props.text}</p>
      </div>
    </div>
  );
}
