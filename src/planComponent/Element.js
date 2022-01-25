import { useDrag } from "react-dnd";
const style = {
  cursor: "move",
  width: 60,
  height: 60
};
const Element = function Element({ link, name, type }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { name, link, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="image"
      style={{ ...style, opacity }}
      data-testid={`box-${name}`}
    >
      <img
        style={{width: '100%', heith: '100%'}}
        src={`${link}?w=248&fit=crop&auto=format`}
        srcSet={`${link}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={name}
        loading="lazy"
      />
    </div>
  );
};


export default Element;