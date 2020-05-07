import React, { Component } from "react";

export default class CategoryWidget extends Component {
  //Kategorileri ve o kategoride bulunan post sayısını listeler
  state = {
    home: [
      { id: "1", cat: "Lifestyle", adet: "5" },
      { id: "2", cat: "Fashion", adet: "10" },
      { id: "3", cat: "Technology ", adet: "15" },
      { id: "4", cat: " Travel ", adet: "20" },
      { id: "5", cat: "  Health ", adet: "25" },
    ],
  };

  render() {
    return (
      <div className="aside-widget">
        <div className="section-title">
          <h2 className="title">Kategoriler</h2>
        </div>
        <div className="category-widget">
          <ul>
            {this.state.home.map((cat) => (
              <li key={cat.id}>
                <a href="/">
                  {cat.cat} <span>{cat.adet}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
