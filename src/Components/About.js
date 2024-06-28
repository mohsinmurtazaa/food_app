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
    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1 className="font-bold text-xl mt-8 text-center">User Profile</h1>
        <div className="flex p-4 border border-black mt-8 justify-center">
          <UserClass name={name} location={location} image={avatar_url} />
        </div>
      </div>
    );
  }
}

export default About;
