import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AlertDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
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
            <Button onClick={this.props.handleDisAgreeDeletePost} color="primary">
              HAYIR
            </Button>
            <Button onClick={this.props.handleAgreeDeletePost} color="primary" autoFocus>
              EVET
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
