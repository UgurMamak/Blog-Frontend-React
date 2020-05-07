import React, { Component } from 'react'

import PostCard from "../post-card/PostCard";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          topPostList: [
            {
              id: 1,
              thumbImage: "callie/img/post-1.jpg",
              title: "Sed ut perspiciatis, unde omnis iste natus title 1",
              publishDate: "20 April 2018 date1",
              tag: "Travel",
              author: "John Doe 1",
            },
    
            {
              id: 2,
              thumbImage: "callie/img/post-2.jpg",
              title: "Ne bonorum praesent cum, labitur persequeris quo cu? title2",
              publishDate: "21 April 2018 date1",
              tag: "Technology Lifestyle",
              author: "John Doe 2",
            },
    
            {
              id: 3,
              thumbImage: "callie/img/post-4.jpg",
              title: "Ne bonorum praesent cum, labitur persequeris quo cu? title2",
              publishDate: "22 April 2018 date1",
              tag: "Technology Lifestyle",
              author: "John Doe 2",
            },
    
            {
              id: 4,
              thumbImage: "callie/img/post-7.jpg",
              title: "Ne bonorum praesent cum, labitur persequeris quo cu? title2",
              publishDate: "23 April 2018 date1",
              tag: "Technology Lifestyle",
              author: "John Doe 2",
            },
          ],
        };
    }

    render() {
        return (
            
            <div className="row">
              {/*Title start*/}
              <div className="col-md-12">
                <div className="section-title">
                  <h2 className="title">SON POSTLAR</h2>
                </div>
              </div>
              {/*Title end*/}
              <PostCard postList={this.state.topPostList} />
            </div>
          
        )
    }
}
