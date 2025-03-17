import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log(this.props.name + "Child render");
    return (
      <div className="user-card">
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Counter Increment
        </button>
        <h2>Name:{name}</h2>
      </div>
    );
  }
}

export default UserClass;
