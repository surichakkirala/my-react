import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log("childcomponent mount");
    const data = await fetch("https://api.github.com/users/surichakkirala");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component didUpdate");
  }
  componentWillUnmount() {
    console.log("component willUnmount");
  }
  render() {
    const { name, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={url} />
        <h2>Name:{name}</h2>
      </div>
    );
  }
}

export default UserClass;
