import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Element from './Element'


export default function IconList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Element link={item.img} name={item.title} />
          <ImageListItemBar
            title={item.title}

            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/740/740845.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/120/120324.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4037/4037101.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/780/780500.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/883/883041.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1758/1758497.png',
    title: 'Icon_ID',

  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/6323/6323810.png',
    title: 'Icon_ID',

  },

];
