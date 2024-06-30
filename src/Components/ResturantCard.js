import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { id, cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props?.resData?.info; /* destructuring object */

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg h-[350px] flex flex-col justify-between overflow-hidden">
      <Link to={"/resturants/" + id} className="flex flex-col h-full">
        <img
          className="rounded-lg h-[150px] w-full object-cover"
          src={CDN_URL + cloudinaryImageId}
        ></img>

        <div className="flex flex-col flex-1">
          <h4 className="font-bold py-2 text-lg truncate">{name}</h4>
          <h4 className="flex-1 break-words overflow-hidden text-ellipsis">
            {cuisines.join(", ")}
          </h4>
          <div className="mt-auto">
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} minutes</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          Top Rated
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
