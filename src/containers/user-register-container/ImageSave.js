import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import Deneme from "@material-ui/icons/ThumbDownAltOutlined";


 
export default class ImageSave extends Component {
  render() {
    return (
      <div>
   <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
     
      </IconButton>

      <IconButton color="secondary"  aria-label="delete">
        <Deneme fontSize="large" />
      </IconButton>

      </div>
    )
  }
}
