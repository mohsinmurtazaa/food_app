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

export default ResturantCard;
