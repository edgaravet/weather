import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div>
            <p>
              местоположение:{this.props.city}, {this.props.country}
            </p>
            <p>температура:{this.props.temp}</p>
            <p>давление:{this.props.pressure}</p>
            <p>заход солнца:{this.props.sunset}</p>
          </div>
        )}
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
