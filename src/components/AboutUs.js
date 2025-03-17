import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent DidMount");
  }

  componentDidUpdate() {
    console.log("Parent comp did update");
  }
  componentWillUnmount() {
    console.log("Parent comp willunmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>AboutUs</h1>
        <span>This is AboutUs page</span>
        <UserClass name={"Second "} />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>AboutUs</h1>
//       <span>This is AboutUs page</span>
//       {/* <User name={"Surendra (function)"} /> */}
//       <UserClass name={"Surendra (class)"} />
//     </div>
//   );
// };

export default AboutUs;
