// import { Component } from "react";

import { useEffect, useState } from "react";

// class UserClass extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, location, email, image } = this.props;
//     return (
//       <div>
//         <img style={{ width: "100px" }} src={image} />
//         <p>Name : {name}</p>
//         <p>Location : {location}</p>
//       </div>
//     );
//   }
// }
// export default UserClass;

const UserClass = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const data = await fetch("https://api.github.com/users/mohsinmurtazaa");
      const json = await data.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img style={{ width: "100px" }} src={data.avatar_url} />
      <p>Name : {data.name}</p>
      <p>Location : {data.location}</p>
    </div>
  );
};

export default UserClass;
