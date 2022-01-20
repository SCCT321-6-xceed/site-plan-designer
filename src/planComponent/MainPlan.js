import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Image, Layer, Stage } from "react-konva";
import URLImage from "./URLImage";
import useElementSize from "./useDimensions";
import rough from "roughjs/bundled/rough.esm";
import getStroke from "perfect-freehand";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(2),
  },
}));

const MainPlan = () => {
  const [squareRef, { width }] = useElementSize();
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => {
      const { x, y } = monitor.getDifferenceFromInitialOffset();
      console.log(x, y);
      setItems((prevItem) => [...prevItem, { ...item, x, y, id: uuidv4() }]);
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop}>
      <div className="MainPlan"></div>

      <Container role="Dustbin" ref={squareRef} className={classes.container}>
        <Stage style={{ border: "2px solid red" }} width={width} height={700}>
          <Layer>
            <URLImage
              x={270}
              src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810"
            />
          </Layer>
          <Layer>
            {items.map((item) => {
              return (
                <URLImage
                  key={item.id}
                  src={item.link}
                  width={100}
                  height={100}
                  y={item.y}
                  x={item.x}
                />
              );
            })}
          </Layer>
        </Stage>
      </Container>
    </div>
  );
};

export default MainPlan;
