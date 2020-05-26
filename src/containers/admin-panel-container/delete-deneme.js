import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class Delete extends Component {

    state={open:false,}

    deletePost=()=>{
        console.log("postu sil");
    }

    updatePost=()=>{
        console.log("postu güncelle");
    }

    handleClickOpen = () => {
        console.log("açma butonuna bastın");
       this.setState({open:true});
      };
    
      handleClose = () => {
        this.setState({open:false});
        console.log("hayıra basıldı");
      };

      handleAgreeClose = () => {
        this.setState({open:false});
        console.log("evet sile basldı");
      };



  render() {
    return (
      <div>
        <IconButton aria-label="delete" onClick={this.handleClickOpen}>
          <DeleteIcon fontSize="large" color="secondary"/>Sil
        </IconButton>
        <IconButton aria-label="delete" onClick={this.deletePost}>
          <UpdateIcon fontSize="large" color="secondary" />Güncelle
        </IconButton>
        <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ONAY"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Postu silmek istediğinizden emin misiniz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
           HAYIR
          </Button>
          <Button onClick={this.handleAgreeClose} color="primary" autoFocus>
            EVET
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
    );
  }
}
