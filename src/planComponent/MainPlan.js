import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Layer,  Stage,  } from "react-konva";
import { Image as IMAGE } from 'react-konva';
import useImage from 'use-image';
import { useMatch } from 'react-router-dom';
import axios from "axios";

const MainPlan = ({url, type, count, setCount, curItem, images, setImages, demo, setDemo, innerWidth, innerHeight }) => {
  const stageRef = React.useRef();
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
        width={30}
        height={30}
        draggable
        onDragEnd={(e) => {
          const xoffset = (innerWidth - width) / 2;
          const yoffset = 10;

          image.x = e.target.x()
          if (e.target.x() < 15 + xoffset) {
            image.x = 15 + xoffset /* values are 15 because all legends are of size 30 and offsetted by 30/2 = 15 */
          }
          if (e.target.x() > width - 15 + xoffset) {
            image.x = width - 15 + xoffset
          }
          
          image.y = e.target.y()
          if (e.target.y() < 15 + yoffset) {
            image.y = 15 + yoffset  
          }
          if (e.target.y() > height - 15 + yoffset) {
            image.y = height - 15 + yoffset
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
          if (e.code === "Delete") {
            console.log("Del initiated on", curImg);
            console.log(images);
            
            if (images.some(item => item === curImg)) {
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
          
              <IMAGE
                x={(innerWidth - width) / 2.60}
                y={20}
                image={srcImg}
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
