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
export default Header;
