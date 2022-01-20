import React, { useState } from "react";
import Button from "./button";
export default function Modal(props) {
  return (
    <div>
      <div className="card p-fluid">
        {Object.keys(props.data.data.Children).map((key, index) => {
          return (
            <div key={key}>
              {props.data.data.Children[key].Content.type === "H1Component" && (
                <h1>{props.data.data.Children[key].Content.props.text} </h1>
              )}
              {props.data.data.Children[key].type === "H2Component" && (
                <h2>{props.data.data.Children[key].Content.props.text} </h2>
              )}
              {props.data.data.Children[key].Content.type ===
                "ListComponent" && (
                <ul>
                  {props.data.data.Children[key].Content.props.li.map(
                    (item, key) => {
                      <li key={key}>{item}</li>;
                    }
                  )}
                </ul>
              )}

              {props.data.data.Children[key].Content.type ===
                "ButtonComponent" && (
                <Button
                  label={props.data.data.Children[key].Content.props.text}
                  icon="pi pi-external-link"
                  onClick={() => true}
                />
              )}
              {props.data.data.Children[key].Content.type ===
                "LinkComponent" && (
                <a href={props.data.data.Children[key].Content.props.url}>
                  {" "}
                  {props.data.data.Children[key].Content.props.text}
                </a>
              )}
              {props.data.data.Children[key].Content.type ===
                "ParagraphComponent" && (
                <p>{props.data.data.Children[key].Content.props.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
