import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Element from './Element'
import axios from 'axios';

export default function IconList({type}) {

  // On initial load, loads all items
const [item, setItem] = React.useState([]);
const getAllItem = () => {
  axios.get("http://localhost:3001/getItem").then((response) => {
    console.log(response);
    const itemList = response.data;
    setItem(itemList);
  });
};
React.useEffect(() => {
  
  getAllItem();
}, []);

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {item.map((items) => (
        <ImageListItem key={items.id}>
          {/* <Element name={items.name}/> */}
          <img src= {process.env.PUBLIC_URL + `/item/${items.image}`}/>
          <ImageListItemBar
            title={items.name}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}