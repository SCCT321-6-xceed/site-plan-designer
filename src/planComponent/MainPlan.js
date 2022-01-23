import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Container, makeStyles } from "@material-ui/core";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { Image, Layer,  Stage,  } from "react-konva";
import URLImage from "./URLImage";
import useElementSize from './useDimensions'
import rough from "roughjs/bundled/rough.esm";
import getStroke from "perfect-freehand";
import useImage from 'use-image';
import { render } from 'react-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(2),
  },
}
));

const MainPlan = ({url, type, count, setCount, count1, setCount1, count2, setCount2, count3, setCount3, count4, setCount4}) => {
  const URLIMAGE = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        width={60}
        height={60}

        /* offsetted to use center of the img */
        offsetX={img ? 30 : 0}
        offsetY={img ? 30 : 0}
      />
    );
  };

  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]); 

  return (
   <div>
      <div
        /* this div handles the drop */
        onDrop={(e) => {
          e.preventDefault();
          stageRef.current.setPointersPositions(e);
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: url, /* this is the url we have saved from Element.js */
              },
            ])
          );
          count += 1
          setCount(count)
          
          console.log(type);
          if (type === "lightning") {
            count1 += 1;
            setCount1(count1);
          }
          if (type === "power point") {
            count2 += 1;
            setCount2(count2);
          }
          if (type === "cctv") {
            count3 += 1;
            setCount3(count3);
          }
          if (type === "alarm") {
            count4 += 1;
            setCount4(count4);
          }
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer>
            <URLImage
              src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810" /* this is hardcoded too, has to be updated */
            />
          </Layer>
          
          <Layer>
            {images.map((image) => {
              return <URLIMAGE image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default MainPlan;
