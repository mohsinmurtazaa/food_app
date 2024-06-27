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
        <div>
          <input
            type="text"
            className="mx-6 border border-solid rounded-md border-black"
            value={searchText}
            placeholder="Search resturant"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-gray-100 m-2 rounded-lg"
            onClick={searchResturant}
          >
            Search
          </button>
          <button
            className="px-4 py-1 bg-blue-500 m-2 rounded-lg"
            onClick={() => {
              setRestList(
                allRestList.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Resturant
          </button>
          <button
            className="px-4 py-1 bg-green-500 m-2 rounded-lg"
            onClick={() => {
              setRestList(allRestList);
              setAllRestList(allRestList);
            }}
          >
            All Resturant
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-2 ">
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
