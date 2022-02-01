// export default Element;

/* Completely using my new Element.js */
import React from 'react';
import { useDrag } from "react-dnd";
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';

const style = {
  cursor: "move",
  width: 100,
  height: 100
};

const Element = function Element({ link, name, type, setType, url, setUrl }) {
  return (
      <img
        alt={name}
        style={{width: '100%', height: '100%'}}
        src={`${link}`}
        draggable = "true"
        onDragStart={(e) => {
          /* setting url for later use in MainPlan.js */
          setUrl(e.target.src);
          setType(type);
        }}
      />
  );
};

export default Element;