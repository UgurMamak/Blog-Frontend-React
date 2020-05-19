import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../../redux/category/CategoryActions";

class VerticalNavbar extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  state = {
    home: [
      { id: "1", cat: "Category page" },
      { id: "2", cat: "Post page" },
      { id: "3", cat: "Author page" },
      { id: "4", cat: "About Us" },
      { id: "5", cat: "Contacts" },
      { id: "6", cat: "Regular" },
    ],
  };

  render() {
    return (
      <div id="nav-aside">
        <ul className="nav-aside-menu">
          <li>
            <a href="index.html">Anasayfa</a>
          </li>
          <li className="has-dropdown">
            <a>Kategoriler</a>
            <ul className="dropdown">
              {this.props.categories.map((category) => (
                <li key={category.id}>
                  <a href="category.html">{category.categoryName}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="contact.html">İletişim</a>
          </li>
          <li className="has-dropdown">
            <Link to="/login">Giriş Yap</Link>
            <ul className="dropdown">
              <li>
                <a href="category.html">Çıkış yap</a>
              </li>
            </ul>
          </li>
        </ul>
        <button className="nav-close nav-aside-close">
          <span></span>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalNavbar);
