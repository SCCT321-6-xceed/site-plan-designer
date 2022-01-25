import React from 'react';

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