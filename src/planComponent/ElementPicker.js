import React from "react";
import { Element } from "./Element";

const elements = [
  {
    name: "Thunder",
    id: "thunder",
    link: "https://cdn-icons-png.flaticon.com/512/740/740845.png"
  }
];

function ElementPicker() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 100,
        border: "2px solid green",
        marginBottom: 10
      }}
    >
      {elements.map((item) => {
        return <Element key={item.id} name={item.name} link={item.link} />;
      })}
    </div>
  );
}

export default ElementPicker;