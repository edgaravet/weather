import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className = "form" onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="город" />
        <button>получить погоду</button>
      </form>
    );
  }
}

export default Form;
