import React, { useState, useContext } from "react";
import { ModalContext } from "../pages/App";
import H1 from "./h1";
import H2 from "./h2";
import Paragraph from "./paragraph";
import CustomModal from "./modal";
import List from "./list";
import Link from "./link";
import Button from "./button";
import { Dialog } from "primereact/dialog";

// This component is passed base case js objects from the app.js file i.e these components don't have children anymore.
// Based on the content type i'm deciding what to render i.e. modal,heading,para etc.
export default function Renderer(props) {
  const { open, toggle } = useContext(ModalContext);
  return (
    <div>
      {props.data.type === "H1Component" && <H1 data={props} />}
      {props.data.type === "H2Component" && <H2 data={props} />}
      {props.data.type === "ListComponent" && <List data={props} />}

      {/* The only exception here is the modal component. In case its a modal component all the nested structure is passed as is for the modal component and children are rendered based on their types inside the modal component */}
      {props.data.Content && props.data.Content.type === "ModalComponent" && (
        <Dialog
          header="Dialog"
          visible={open}
          style={{
            width: props.data.Content.props.width,
            height: props.data.Content.props.height,
          }}
          onHide={() => toggle(false)}
        >
          <CustomModal data={props} />
        </Dialog>
      )}
      {props.data.type === "ButtonComponent" && <Button data={props} />}
      {props.data.type === "LinkComponent" && <Link data={props} />}
      {props.data.type === "ParagraphComponent" && <Paragraph data={props} />}
    </div>
  );
}
