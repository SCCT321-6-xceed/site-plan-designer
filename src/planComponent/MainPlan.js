import React, { useEffect, useLayoutEffect, useRef, useState, setState } from "react"
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
import { Html } from 'react-konva-utils';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(2),
  },
}
));

const MainPlan = ({url, type, count, setCount, curItem, images, setImages }) => {
  const stageRef = React.useRef();
  const [curImg, setCurImg] = React.useState();

  const URLIMAGE = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        width={60}
        height={60}
        draggable
        onDragEnd={(e) => {
          image.x = e.target.x()
          image.y = e.target.y()
        }}
        onClick = {(e) => {
          console.log("Image log", image);
          setCurImg(image);
        }}
        /* offsetted to use center of the img */
        offsetX={img ? 30 : 0}
        offsetY={img ? 30 : 0}
      />
    );
  };

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
                key: uuidv4(),
                type: type,
                name: curItem.name,
              },
            ])
          );
          setCount((item)=>({...item, total: (count.total ? count.total : 0) + 1}));
          console.log("type", type);
          setCount((item)=>({...item, [type]: (count[type] ? count[type] : 0) + 1}));
          console.log("type and count", type, count[type]);
          console.log("count now", count);
        }}
        onDragOver={(e) => e.preventDefault()}
        tabIndex={0}
        onKeyDown={(e) => {
          console.log(e.code);
          if (e.code == "Delete") {
            console.log("Del initiated on", curImg);
            console.log(images);
            
            if (images.some(item => item == curImg)) {
              console.log("img found");
              setImages((state) => state.filter((item) => item !== curImg));

              /* updating legend count */
              setCount((item)=>({...item, total: (count.total ? count.total : 0) - 1}));
              setCount((item)=>({...item, [curImg.type]: (count[curImg.type] ? count[curImg.type] : 0) - 1}));
            } 
          }
        }}
      >
        <Stage
          // width={window.innerWidth}
          // height={window.innerHeight}
          width={600}
          height={600}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer>
            <URLImage
              src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810"
            />
          </Layer>
          
          <Layer>
            {images.map((image) => {
              return (
                <URLIMAGE image={image} />
              )
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default MainPlan;