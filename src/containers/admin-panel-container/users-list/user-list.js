import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

import RoleSelect from "./role-select";

export default class Userlist extends Component {
  render() {
    return (
      <TableRow key={this.props.user.id}>
        <TableCell style={{fontSize: "12px" }} component="th" scope="row">
          {this.props.user.firstName}
        </TableCell>
        <TableCell style={{fontSize: "12px" }} align="right">{this.props.user.lastName}</TableCell>
        <TableCell style={{fontSize: "12px" }} align="right">{this.props.user.email}</TableCell>
        <TableCell style={{fontSize: "12px" }} align="right">{this.props.user.role}</TableCell>
        <TableCell style={{fontSize: "12px" }} align="right">
          {" "}
          <RoleSelect
            role={this.props.role}
            handleChange={this.props.handleChange}
          />
          <Button onClick={() => this.props.handleUpdate(this.props.user.id)}>
            Güncelle
          </Button>{" "}
        </TableCell>
        
      </TableRow>
    );
  }
}
