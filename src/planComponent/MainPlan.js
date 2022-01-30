import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  setState,
} from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Image, Layer, Stage } from "react-konva";
import URLImage from "./URLImage";
import useElementSize from "./useDimensions";
import rough from "roughjs/bundled/rough.esm";
import getStroke from "perfect-freehand";
import useImage from "use-image";
import { render } from "react-dom";
import { Html } from "react-konva-utils";
import { useMatch } from "react-router-dom";
import axios from "axios";

const MainPlan = ({
  url,
  type,
  count,
  setCount,
  curItem,
  images,
  setImages,
}) => {
  const stageRef = React.useRef();
  const [curImg, setCurImg] = React.useState();
  const [passID, setpassID] = useState([]);
  
  const {
    params: { projectID },
  } = useMatch("/plandesign/:projectID");

  const passProject = () => {
    axios
      .get(`http://localhost:3001/passProject/${projectID}`)
      .then((response) => {
        const id = response.data;
        setpassID(id);
        console.log(id);
      });
  };
  React.useEffect(() => {
    passProject();
  }, []);


  const [iconName, seticonName] = useState("")
  const [positionX, setpositionX] = useState(0);
  const [positionY, setpositionY] = useState(0);
  const addIcon = () => {
    axios
      .post(`http://localhost:3001/addPosition/` + projectID, {
        iconName: iconName,
        positionX: positionX,
        positionY: positionY,
        projectID: projectID
      })
      .then((res) => {
        // then print response status
        console.warn(res);
        console.log(curItem)
      });
  }; 

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
          image.x = e.target.x();
          image.y = e.target.y();
        }}
        onClick={(e) => {
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
                src: url /* this is the url we have saved from Element.js */,
                key: uuidv4(),
                type: type,
                name: curItem.name,
              },
            ])
          );
          addIcon();
          setCount((item) => ({
            ...item,
            total: (count.total ? count.total : 0) + 1,
          }));
          console.log("type", type);
          setCount((item) => ({
            ...item,
            [type]: (count[type] ? count[type] : 0) + 1,
          }));
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

            if (images.some((item) => item == curImg)) {
              console.log("img found");
              setImages((state) => state.filter((item) => item !== curImg));

              /* updating legend count */
              setCount((item) => ({
                ...item,
                total: (count.total ? count.total : 0) - 1,
              }));
              setCount((item) => ({
                ...item,
                [curImg.type]:
                  (count[curImg.type] ? count[curImg.type] : 0) - 1,
              }));
            }
          }
        }}
      >
        <Stage
          // width={window.innerWidth}
          // height={window.innerHeight}
          width={1680}
          height={1000}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {passID.map((passIDs) => (
              <URLImage
                component="img"
                src={process.env.PUBLIC_URL + `/sitemap/${passIDs.image}`}
              />
            ))}
          </Layer>

          <Layer>
            {images.map((image) => {
              console.log("URLIMAGE", image.x, image.y);
              return <URLIMAGE image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default MainPlan;
