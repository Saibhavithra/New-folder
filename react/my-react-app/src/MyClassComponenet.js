import React, { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      submitedName: ""
    };
  }
  inputChange = e => {
    const Name = e.target.value;
    this.setState(() => ({ Name }));
  };

  displayName = () => {
    this.setState(prevState => ({ submitedName: prevState.Name }));
  };

  render() {
    return (
      <div>
        <form>
          <label>Enter the Name</label>
          <input type="text" name="Name" onChange={this.inputChange} />
          <button type="button" onClick={this.displayName}>
            Submit
          </button>
          <p>
            "Name: "
            {this.state.submitedName }
          </p>
        </form>
      </div>
    );
  }
}
export default MyClassComponent;