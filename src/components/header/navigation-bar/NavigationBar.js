import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as categoryActions from "../../../redux/category/CategoryActions"

class NavigationBar extends Component {

  componentDidMount() {
    this.props.actions.getCategories();
  }

  state={
    home:[
      {id:"1", cat:"Category page"},
      {id:"2", cat:"Post page"},
      {id:"3", cat:"Author page"},
      {id:"4", cat:"About Us"},
      {id:"5", cat:"Contacts"},
      {id:"6", cat:"Regular"}

    ]
  }


  render() {
    return (
      <div id="nav-bottom">
        <div className="container">
          <ul className="nav-menu">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li id="nav2" className="has-dropdown">
             <a href="/">Kategoriler</a>
            
              <div className="dropdown">
                <div className="dropdown-body">
                  <ul className="dropdown-list"> 
                    {this.props.categories.map((category)=>(
                      <li key={category.id}>
                      <a href="category.html">{category.categoryName}</a>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="has-dropdown megamenu">
              <a href="/">Lifestyle</a>
              <div className="dropdown tab-dropdown">
                <div className="row">
                  <div className="col-md-2">
                    <ul className="tab-nav">
                      <li className="active">
                        <a data-toggle="tab" href="#tab1">
                          Lifestyle
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">
                          Fashion
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab1">
                          Health
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab2">
                          Travel
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-10">
                    <div className="dropdown-body tab-content">
                      <div id="tab1" className="tab-pane fade in active">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-10.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Travel</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Sed ut perspiciatis, unde omnis iste natus
                                    error sit
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-13.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Travel</a>
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Mel ut impetus suscipit tincidunt. Cum id
                                    ullum laboramus persequeris.
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-12.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Mel ut impetus suscipit tincidunt. Cum id
                                    ullum laboramus persequeris.
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="tab2" className="tab-pane fade in">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-5.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Postea senserit id eos, vivendo periculis ei
                                    qui
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-8.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Fashion</a>
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Sed ut perspiciatis, unde omnis iste natus
                                    error sit
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="post post-sm">
                              <a className="post-img" href="blog-post.html">
                                <img src="./img/post-9.jpg" alt="" />
                              </a>
                              <div className="post-body">
                                <div className="post-category">
                                  <a href="category.html">Lifestyle</a>
                                </div>
                                <h3 className="post-title title-sm">
                                  <a href="blog-post.html">
                                    Mel ut impetus suscipit tincidunt. Cum id
                                    ullum laboramus persequeris.
                                  </a>
                                </h3>
                                <ul className="post-meta">
                                  <li>
                                    <a href="author.html">John Doe</a>
                                  </li>
                                  <li>20 April 2018</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="has-dropdown megamenu">
              <a href="/">Fashion</a>
              <div className="dropdown">
                <div className="dropdown-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h4 className="dropdown-heading">Categories</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Lifestyle</a>
                        </li>
                        <li>
                          <a href="/">Fashion</a>
                        </li>
                        <li>
                          <a href="/">Technology</a>
                        </li>
                        <li>
                          <a href="/">Health</a>
                        </li>
                        <li>
                          <a href="/">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h4 className="dropdown-heading">Lifestyle</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Lifestyle</a>
                        </li>
                        <li>
                          <a href="/">Fashion</a>
                        </li>
                        <li>
                          <a href="/">Health</a>
                        </li>
                      </ul>
                      <h4 className="dropdown-heading">Technology</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Lifestyle</a>
                        </li>
                        <li>
                          <a href="/">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h4 className="dropdown-heading">Fashion</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Fashion</a>
                        </li>
                        <li>
                          <a href="/">Technology</a>
                        </li>
                      </ul>
                      <h4 className="dropdown-heading">Travel</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Lifestyle</a>
                        </li>
                        <li>
                          <a href="/">Healtth</a>
                        </li>
                        <li>
                          <a href="/">Fashion</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h4 className="dropdown-heading">Health</h4>
                      <ul className="dropdown-list">
                        <li>
                          <a href="/">Technology</a>
                        </li>
                        <li>
                          <a href="/">Fashion</a>
                        </li>
                        <li>
                          <a href="/">Health</a>
                        </li>
                        <li>
                          <a href="/">Travel</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
            
            <li id="nav2" className="has-dropdown">
              {/*<a href="/login">Giriş Yap</a>*/}
              <Link to="/login">Giriş Yap</Link>
              <div className="dropdown">
                <div className="dropdown-body">
                  <ul className="dropdown-list">
                    <li>
                      <a href="category.html">Çıkış Yap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            
            <li>
              <Link to="/register">Üye Ol</Link>
            </li>
            



          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer,//kategorileri listelemek için
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
