import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [allRestList, setAllRestList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-res">
        <button
          className="res-btn"
          onClick={() => {
            setRestList(restList.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top Rated Resturant
        </button>
        <button className="res-btn" onClick={() => setRestList(allRestList)}>
          All Resturant
        </button>
      </div>
      <div className="res-container">
        {restList.map((resturant) => (
          <ResturantCard
            key={resturant.info.id}
            resData={resturant}
          ></ResturantCard>
        ))}
      </div>
    </div>
  );
};
export default Body;
