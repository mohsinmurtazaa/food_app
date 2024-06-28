import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Menu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Fetch error: ", error);
      setResInfo(null);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
      ?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2].card
      ?.card?.categories?.[0]?.itemCards;

  // Function to render item cards
  const renderItemCards = (itemCards) => {
    return (
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mx-auto w-1/2 bg-gray-100 p-4 mt-4">
      <div className="mx-auto w-1/2 ">
        <h1 className="font-bold text-xl">{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2 className="font-bold">Menu</h2>
        <ul>{renderItemCards(itemCards)}</ul>
      </div>
    </div>
  );
};

export default Menu;
