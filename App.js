import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            Cart
            {/* <img
              style={{ width: "80px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pEd8n1wVrRrA5EXQig4C6Q_qR1Y2IQU2hQWmJ6ChYw&s"
            ></img> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    name: "Karachi Biryani",
    deliveryTime: "30 mins",
    description: "Best biryani resturant",
  },
  {
    name: "Sindhi Biryani",
    deliveryTime: "35 mins",
    description: "Best biryani from sindh ",
  },
  {
    name: "Piza Bytes",
    deliveryTime: "20 mins",
    description: "20 mins for best piza",
  },
  {
    name: "Ghani Shenwari",
    deliveryTime: "1.5 hours",
    description: "Best afghan resturant",
  },
  {
    name: "Ranchers",
    deliveryTime: "25 mins",
    description: "Halal Fast Food",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resturant) => (
          <ResturantCard
            key={resturant.name}
            resData={resturant}
          ></ResturantCard>
        ))}
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { name, deliveryTime, description } =
    props?.resData; /* destructuring object */
  return (
    <div className="resturant-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gyA7LpwwPROEDTEOU_9-Y2sI2_P4njObMbOGUDnRPA&s"></img>
      <h4>{name}</h4>
      <h4>
        *<span>{deliveryTime}</span>
      </h4>
      <p>{description}</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
