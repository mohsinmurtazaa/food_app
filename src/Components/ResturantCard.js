const ResturantCard = (props) => {
  console.log(props.resData.info);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props?.resData?.info; /* destructuring object */
  return (
    <div className="resturant-card">
      <img
        style={{ width: 100, height: 100 }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

export default ResturantCard;
