import React, { useEffect, useLayoutEffect, useRef, useState, setState } from "react"
import { Container, makeStyles } from "@material-ui/core";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { Layer,  Stage,  } from "react-konva";
import { Image as IMAGE } from 'react-konva';

import URLImage from "./URLImage";
import useElementSize from './useDimensions'
import rough from "roughjs/bundled/rough.esm";
import getStroke from "perfect-freehand";
import useImage from 'use-image';
import { render } from 'react-dom';
import { Html } from 'react-konva-utils';
import { useMatch } from 'react-router-dom';
import axios from "axios";
import { Collapse, Button } from "@mui/material";

const MainPlan = ({url, type, count, setCount, curItem, images, setImages, demo, setDemo, innerWidth, innerHeight }) => {
  const stageRef = React.useRef();
  const srcImgRef = React.useRef();
  const [curImg, setCurImg] = React.useState();
  
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  const [passID, setpassID] = useState([])
  const [srcImg, setSrcImg] = useState()

  const {
    params: { projectID },
  } = useMatch('/plandesign/:projectID');
  console.log(projectID)

  const passProject = () => {
    let id;
    axios
      .get(`http://localhost:3001/passProject/${projectID}`)
      .then((response) => {
        id = response.data;
        setpassID(id);
        console.log("this is id", id);
        let img = new Image();
        img.src= process.env.PUBLIC_URL + `/sitemap/${id[0].image}`;
        setSrcImg(img);
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
          console.log("img dimensions", img, img.width, img.height);
          console.log("heights", innerHeight, height);
        };
      });
  };

  React.useEffect(() => {
    passProject();
  }, []);

  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'stage.png');
  };

  const URLIMAGE = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <IMAGE
        image={img}
        x={image.x}
        y={image.y}
        width={30}
        height={30}
        draggable
        onDragEnd={(e) => {
          const xoffset = (innerWidth - width) / 2;
          const yoffset = 10;
          const half = 15; /* if you want to change the width and height from 30, be sure width and height are the same value, AND half = width / 2.*/

          image.x = e.target.x()
          if (e.target.x() < half + xoffset) {
            image.x = half + xoffset /* values are 30 because all legends are of size 60 and offsetted by 60/2 = 30 */
          }
          if (e.target.x() > width - half + xoffset) {
            image.x = width - half + xoffset
          }
          
          image.y = e.target.y()
          if (e.target.y() < half + yoffset) {
            image.y = half + yoffset  
          }
          if (e.target.y() > height - half + yoffset) {
            image.y = height - half + yoffset
          }
          setDemo(demo + 1);
          demo += 1;  
          console.log("URLIMAGE", image.x, image.y);
        }}
        onClick = {(e) => {
          console.log("Image log", image);
          setCurImg(image);
        }}

        /* offsetted to use center of the img */
        offsetX={img ? 15 : 0} /* these values should be equal to the variable "half", be sure to update them if you play around with the width and height */
        offsetY={img ? 15 : 0}
      />
    );
  };

  return (
   <div>
      <Button onClick={handleExport}>Download Siteplan</Button>
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
          console.log("passId", passID[0]);
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
          width={innerWidth}
          height={innerHeight}
          ref={stageRef}
          style={{border: '1px solid grey', paddingBottom: 10}}
        >
          <Layer>
          {passID.map((passIDs) =>
              <IMAGE
                x={(innerWidth - width) / 2}
                y={10}
                image={srcImg}
              />
            )}
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