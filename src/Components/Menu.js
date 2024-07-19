import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCategories from "./MenuCategories";
import Shimmer from "./Shimmer";

const Menu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
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

  const handleCategoryClick = (index) => {
    setShowIndex(index === showIndex ? null : index);
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

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* acordian categories */}
      {categories.map((category, index) => {
        return (
          <MenuCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => handleCategoryClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
