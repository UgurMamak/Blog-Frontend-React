import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class layout extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          {/*Resim*/}
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Paper style={{ textAlign: "center" }}>xs=6</Paper>
          </Grid>
          <Grid item xs={4} />
          {/*Resim*/}

          {/*Kategoriler*/}
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Paper style={{ textAlign: "center" }}>xs=6</Paper>
          </Grid>
          <Grid item xs={4} />
          {/*Kategoriler*/}

          {/*Title*/}
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Paper style={{ textAlign: "center" }}>xs=6</Paper>
          </Grid>
          <Grid item xs={4} />
          {/*Title*/}

          {/*Editor*/}
          <Grid item xs={1}>
            <Paper style={{ textAlign: "center" }}>xs=3</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper style={{ textAlign: "center" }}>xs=3</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper style={{ textAlign: "center" }}>xs=3</Paper>
          </Grid>
          {/*Editor*/}
        </Grid>
      </div>
    );
  }
}
