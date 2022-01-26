import React, { useRef, useState, } from "react"
import { makeStyles } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import { Image, Layer, Stage, } from "react-konva";
import URLImage from "./URLImage";
import useImage from 'use-image';
import { useMatch } from 'react-router-dom';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    paddingTop: theme.spacing(2),
  },
}
));

const MainPlan = ({ url, type, count, setCount }) => {
  const [passID, setpassID] = useState([])
  const {
    params: { projectID },
  } = useMatch('/plandesign/:projectID');
  console.log(projectID)

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
  const stageRef = useRef();
  const [images, setImages] = useState([]);
  const [curImg, setCurImg] = useState();

  const URLIMAGE = ({ image }) => {
    const [img] = useImage(image.src);
    return (
      <Image
        image={img}
        x={image.x}
        y={image.y}
        width={30}
        height={30}
        draggable
        onDragEnd={(e) => {
          image.x = e.target.x()
          image.y = e.target.y()
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
                src: url, /* this is the url we have saved from Element.js */
                key: uuidv4(),
                type: type,
              },
            ])
          );
          setCount((item) => ({ ...item, total: (count.total ? count.total : 0) + 1 }));
          console.log("type", type);
          setCount((item) => ({ ...item, [type]: (count[type] ? count[type] : 0) + 1 }));
          console.log("type and count", type, count[type]);
          console.log("count now", count);
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
              setCount((item) => ({ ...item, total: (count.total ? count.total : 0) - 1 }));
              setCount((item) => ({ ...item, [curImg.type]: (count[curImg.type] ? count[curImg.type] : 0) - 1 }));
            }
          }
        }}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer>
            {passID.map((passIDs) =>
              <URLImage
                component="img"
                src={process.env.PUBLIC_URL + `/sitemap/${passIDs.image}`}
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