import axios from "axios";
import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

export default class Left extends React.Component {
  
    state = {
      categories: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3001/getCategory`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
  
    }  
    render() {
      
      return (
        <List>
          {
            this.state.categories
              .map(categories =>
                <ListItemButton key={categories.id}>{categories.name}</ListItemButton>
              )
          }
        </List>
      )
    }
  }