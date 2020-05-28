import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import LeftNav from "../user-profile-container/LeftNav";
import Grid from "@material-ui/core/Grid";
import {Admin,Operator, User} from "../../helpers/role"
//component
import CategoryAdd from "./category-add";
import CategoryList from "./category-list"
import NotFound from "../../components/common/Error404"
export default class CategoryOperation extends Component {
  render() {
    if(localStorage.getItem("role")!==Admin)
    {
      return <NotFound/>
    } 
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
