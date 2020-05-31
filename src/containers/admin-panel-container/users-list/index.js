import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import * as userActions from "../../../redux/User/UserActions";
import LeftNav from "../../../components/LeftNav/LeftNav";
import { Button } from "@material-ui/core";

import RoleSelect from "./role-select";
import UserList from "./user-list";

class index extends Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }
  constructor(props) {
    super(props);
    this.state = { value: "", role: "", search: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete = (userId) => {
    console.log("gelenıd", userId);
  };

  handleChange = (event, userId) => {
    this.setState({ role: event.target.value });
  };
  handleUpdate = (userId) => {
    console.log("deneme", userId);
    console.log("role", this.state.role);

    const data = new FormData();
    data.append("role", this.state.role);
    data.append("id", userId);
    this.props.actions.updateUser(data);
    window.location.reload();
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    /*
    const users = [];
    this.props.users.map((user) => {
      users.push(
        <UserList key={user.id} user={user} role={this.state.role}
        handleUpdate={this.handleUpdate}
         handleChange={this.handleChange} handleDelete={this.handleDelete} />
      );
    });
*/

    const users = [];
    const items = this.props.users
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.firstName
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.lastName
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.role.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        users.push(
          <UserList
            key={data.id}
            user={data}
            role={this.state.role}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
          />
        );
      });

    return (
      <div>
        <LeftNav />
        <span className="login100-form-title">
          <b>Sisteme Kayıtlı Kullanıcılar</b>
        </span>
        {console.log("user bilgileri", this.props.users)}
        <TextField
          error
          id="outlined-error"
          label="Ara"
          variant="outlined"
          onChange={(e) => this.searchSpace(e)}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Ad
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                  align="right"
                >
                  Soyad
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                  align="right"
                >
                  Email
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                  align="right"
                >
                  Yetki
                </TableCell>
                <TableCell
                  style={{ fontWeight: "bold", fontSize: "15px" }}
                  align="right"
                >
                  Güncelle
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{users}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.UserListReducer, //kategorileri listelemek için
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUsers: bindActionCreators(userActions.getAllUser, dispatch),
      updateUser: bindActionCreators(userActions.updateUserRole, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
