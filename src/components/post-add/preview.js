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
        <div>
          <div id="post-header" className="page-header">
            <div
              className="page-header-bg"
              style={{ backgroundImage: "url(" + this.props.imagePath + ")" }}
              data-stellar-background-ratio="0.5"
            />
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