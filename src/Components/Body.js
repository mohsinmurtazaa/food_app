import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [allRestList, setAllRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const searchResturant = () => {
    const filteredRes = allRestList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllRestList(allRestList);
    setRestList(filteredRes);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>Looks like you are offline.Please check your internet connection.</h1>
    );

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-res">
        <div className="search-res">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchResturant}>Search</button>
          <button
            className="res-btn"
            onClick={() => {
              setRestList(
                allRestList.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Resturant
          </button>
          <button
            className="res-btn"
            onClick={() => {
              setRestList(allRestList);
              setAllRestList(allRestList);
            }}
          >
            All Resturant
          </button>
        </div>
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
