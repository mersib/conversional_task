import React, { useState } from "react";

export default function List(props) {
  return (
    <div>
      <div className="card p-fluid">
        <ul>
          {props.data.data.props.li.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
