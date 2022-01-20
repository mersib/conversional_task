import React, { useState, useContext } from "react";
import { ModalContext } from "../pages/App";
export default function Link(props) {
  const { open, toggle } = useContext(ModalContext);
  return (
    <div>
      <div className="card p-fluid">
        <a
          href={props.data.data.props.url}
          target="_blank"
          onClick={() => {
            toggle(true);
          }}
        >
          {" "}
          {props.data.data.props.text}
        </a>
      </div>
    </div>
  );
}
