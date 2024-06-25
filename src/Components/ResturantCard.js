import { Link } from "react-router-dom";
const ResturantCard = (props) => {
  const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props?.resData?.info; /* destructuring object */
  return (
    <div className="resturant-card">
      <Link to={"/resturants/" + id}>
        <div className="res-image">
          <img
            style={{ width: "-webkit-fill-available" }}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          ></img>
        </div>

        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} minutes</h4>
      </Link>
    </div>
  );
};

export default ResturantCard;
