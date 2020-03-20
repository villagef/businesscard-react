import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div fluid className="jumbo">
          <div className="overlay">
            <div className="content">
              <h1>Welcome</h1>
              <p>Have a look at my profile</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
