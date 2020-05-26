import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import LeftNav from "../user-profile-container/LeftNav";
import Grid from "@material-ui/core/Grid";

//component
import CategoryAdd from "./category-add";
import CategoryList from "./category-list"

export default class CategoryOperation extends Component {
  render() {
    return (
      <div>
        <LeftNav />
        <Container maxWidth="xl">
          <br />
          <CategoryAdd/>
          <br />
          <CategoryList/>
        </Container>
      </div>
    );
  }
}
