import React from "react";
import moment from "moment";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatOfTime = offset => moment(offset).format("LTS");
const findTimeOffset = offset => formatOfTime(getTimeWithOffset(offset));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      offset: findTimeOffset(this.props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        offset: findTimeOffset(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
