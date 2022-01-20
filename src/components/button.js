import React, { useState, useContext } from "react";
import { ModalContext } from "../pages/App";
import { Button } from "primereact/button";

export default function ButtonCustom(props) {
  //   const onButtonClick = useContext(ModalContext);
  const { open, toggle } = useContext(ModalContext);
  return (
    <div>
      <div className="card p-fluid">
        <Button
          label="Show"
          icon="pi pi-external-link"
          //   onClick={onButtonClick}
          onClick={() => toggle(true)}
        />
      </div>
    </div>
  );
}
