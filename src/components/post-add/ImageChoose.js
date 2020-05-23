import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
export default class ImageChoose extends Component {
  render() {
    return (
        <Grid container spacing={3}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Paper style={{ textAlign: "center" }}>
            <img
              style={{
                width: "300px",
                height: "300px",
                alignContent: "center",
              }}
              accept="image/x-png,image/gif,image/jpeg"
              src={this.props.imagePath}
            />
            <input
              type="file"
              className="form-control"
              aria-describedby="basic-addon1"
              accept="image/png, image/jpeg"
              onChange={this.props.handleFileUpload}
            />
          </Paper>
        </Grid>
        <Grid item xs={4} />
        </Grid>
    );
  }
}
