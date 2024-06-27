import { Link } from "react-router-dom";
const ResturantCard = (props) => {
  const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props?.resData?.info; /* destructuring object */
  return (
    <div className=" m-4 p-4 bg-gray-100  rounded-lg ">
      <Link to={"/resturants/" + id}>
        <img
          className="rounded-lg h-[150px] w-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>

        <h4 className="font-bold py-4 text-lg">{name}</h4>
        <h4 className="break-words">{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} minutes</h4>
      </Link>
    </div>
  );
};

export default ResturantCard;
