import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

export default class CategorySelectBox extends Component {
  render() {
    return (
      <div> 
        <FormControl
          className="wrap-input100 validate-input"
          variant="outlined"
          style={{ width: "400px" }}
        >
          <InputLabel id="demo-controlled-open-select-label">Kategoriler</InputLabel>
          <div
            className="wrap-input100 validate-input"
            id="emailO"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <Select
              className="input100"
              style={{
                borderRadius: "40px",
                fontSize: "15px",
                color: "#666666",
              }}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={this.props.open}
              onClose={this.props.closeSelect}
              onOpen={this.props.openSelect}
              value={this.props.selectedValue}
              onChange={this.props.changeSelect}
            >
              {this.props.categoryItems.map((category) => (
                <MenuItem
                  key={category.id}
                  style={{ fontSize: "15px" }}
                  value={category.id}
                >
                  {category.categoryName}
                </MenuItem>
              ))}
            </Select>
          </div>
        </FormControl>
      </div>
    );
  }
}
