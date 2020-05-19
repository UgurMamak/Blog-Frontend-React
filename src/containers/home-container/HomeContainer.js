import React, { Component } from "react";

import SliderPost from "../../components/slider-post/SliderPost";
import Home from "../../components/home/Home";
import LeftContainer from "../left-container/LeftContainer";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
         {/*-----SliderPost start----*/}
        <div className="section">
          <div className="container">
            <SliderPost />
          </div>
        </div>
        {/*-----SliderPost end----*/}

        <div className="section">
          <div className="container">
            <div className="row">
              {/*-------------------------------START---------------*/}

              <div className="col-md-8">
                <Home />                              
              </div>
              
              <div className="col-md-4">
                <LeftContainer />
              </div>

              {/*-------------------------------END---------------*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
