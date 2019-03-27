import React, { Component } from "react";

class Controlled extends Component {
  state = {
    name: "",
    lastname: ""
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastname: event.target.value });
  };

  onHandler = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandler}>
          <div className="form_element">
            <label>Enter name</label>
            <input
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>

          <div className="form_element">
            <label>Enter Lastname</label>
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Controlled;
