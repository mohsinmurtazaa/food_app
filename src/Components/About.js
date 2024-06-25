import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohsinmurtazaa");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    console.log(this.state.userInfo);

    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>User Profile</h3>
        <div className="user-profile">
          <UserClass name={name} location={location} image={avatar_url} />
        </div>
      </div>
    );
  }
}

export default About;
