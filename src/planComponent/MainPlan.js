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

  const URLIMAGE = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <IMAGE
        image={img}
        x={image.x}
        y={image.y}
        width={60}
        height={60}
        draggable
        onDragEnd={(e) => {
          const xoffset = (innerWidth - width) / 2;
          const yoffset = 10;

          image.x = e.target.x()
          if (e.target.x() < 30 + xoffset) {
            image.x = 30 + xoffset /* values are 30 because all legends are of size 60 and offsetted by 60/2 = 30 */
          }
          if (e.target.x() > width - 30 + xoffset) {
            image.x = width - 30 + xoffset
          }
          
          image.y = e.target.y()
          if (e.target.y() < 30 + yoffset) {
            image.y = 30 + yoffset  
          }
          if (e.target.y() > height - 30 + yoffset) {
            image.y = height - 30 + yoffset
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
          // width={width}
          // height={height + 10}
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
                // width={this.props.width}
                // height={this.props.height}
                // width={1680}
                // height={1000}
                // image={process.env.PUBLIC_URL + `/sitemap/${passIDs.image}`}
                image={srcImg}
              />

              // <URLImage
              //   ref={srcImgRef}
              //   component="img"
              //   style={{align: 'center'}}
              //   src={process.env.PUBLIC_URL + `/sitemap/${passIDs.image}`}
              // />
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