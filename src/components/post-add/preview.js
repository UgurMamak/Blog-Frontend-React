import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Preview extends Component {
  render() {
    return (
      <div>
        <br/> <br/> <br/>
        <span className="login100-form-title">
                <b>ÖN İZLEME</b>
              </span>
              <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="post">
                  <a className="post-img" href="blog-post.html">
                    <img src={require('./post1.jpg')}  alt="" />
                  </a>
                  <div className="post-body">
                    <div className="post-category">
                      <a href="category.html">Kategori</a>
                    </div>
                    <h3 className="post-title">
                      <a href="blog-post.html">Başlık</a>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <a href="author.html">Yazar ad soyad</a>
                      </li>
                      <li>tarih</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="post">
                  <a className="post-img" href="blog-post.html">
                    <img  src={this.props.imagePath} alt="" />
                  </a>
                  <div className="post-body">
                    <div className="post-category">
                      <a href="category.html">Travel</a>
                    </div>
                    <h3 className="post-title">
                      <a href="blog-post.html">{this.props.title}</a>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <a href="author.html">YAZAR AD SOYAD</a>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        
        <div>
          <div id="post-header" className="page-header">

          { /* <div
            
              className="page-header-bg"
              style={{   "max-width": "100%",
                "height": "auto", backgroundImage: "url(" + this.props.imagePath + ")" }}
              data-stellar-background-ratio="0.5"
            />*/}

            <div className="page-header-bg">
              <img src={this.props.imagePath} />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="post-category">
                    {/*this.props.categoryList.map(c=>(
                             <Link>{c.categoryName}</Link>
                        ))*/}
                    <Link to="">Kategori Adı</Link>
                  </div>
                  <h1>{this.props.title}</h1>
                  <ul className="post-meta">
                    <li>
                      <a href="author.html">yazan ad soyad</a>
                    </li>
                    <li>yazılma tarihi</li>
                    <li>
                      <i className="fa fa-comments" />
                      yorum sayısı
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
       
        </div>
        <div>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="section-row">
                    <h3>{this.props.title}</h3>
                    <div>{ReactHtmlParser(this.props.content.content)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    content: state.CkEditorReducer, // post ve put işlemi
  };
}

export default connect(mapStateToProps, null)(Preview);
