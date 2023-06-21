import React, { Component } from "react";
import Background from "./glassesImage/background.jpg";
import data from "./data/dataGlasses.json";

export default class glasses extends Component {
  state = {
    url: "./glassesImage/v1.png",
  };
  changeGlass = (id) => {
    let newGlass = data.find((glass) => {
      return glass.id === id;
    });
    this.setState(newGlass);
  };

  renderGlasses = () => {
    return data.map(({ id, url }) => {
      return (
        <div key={id} className="card text-center col-2">
          <img
            onClick={() => this.changeGlass(id)}
            className="card-img-top"
            src={url}
            alt="Title"
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Background})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="nguoiMau text-center position-relative">
            <img src="./glassesImage/model.jpg" alt="" />
            <img
              className="position-absolute"
              style={{ top: "20%", left: "39.60%" }}
              src={this.state.url}
              alt=""
            />
          </div>

          <div className="glasses row ">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
