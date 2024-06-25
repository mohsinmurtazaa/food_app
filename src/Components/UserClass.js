import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, email, image } = this.props;
    return (
      <div>
        <img style={{ width: "100px" }} src={image} />
        <p>Name : {name}</p>
        <p>Location : {location}</p>
      </div>
    );
  }
}
export default UserClass;
