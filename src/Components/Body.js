import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
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
export default Body;
