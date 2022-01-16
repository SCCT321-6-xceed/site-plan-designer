import React, {useState} from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import { Layer,  Stage,  } from "react-konva";
import URLImage from "./URLImage";

function Canvas() {
  const [items, setItems] = useState([])
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => {
      const {x, y} = monitor.getDifferenceFromInitialOffset()
      setItems(prevItem=>[...prevItem, {...item, x, y, id: uuidv4()}])
    },
    
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div 
      role="Dustbin"
      ref={drop}
    >
    <Stage
      
      style={{ border: "2px solid red" }}
      width={window.innerWidth}
      height={500}
    >
      <Layer>
        {items.map(item=>{
          return (
            <URLImage 
              key={item.id} 
              src={item.link} 
              width={100} 
              height={100} 
              y={item.y} 
              x={item.x} 
            />
          )
        })}
      </Layer>
    </Stage>      
    </div>

  );
}

export default Canvas;
