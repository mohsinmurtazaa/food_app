import { CDN_URL } from "../utils/constants";
const MenuSubCategoriesList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-4 ">
              <span>
                {item.card.info.name} - ₹{" "}
                {item.card.info.price
                  ? +item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            {item.card.info.imageId ? (
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            ) : (
              ""
            )}
            <button className="absolute bottom-4 right-4 p-2 rounded-lg bg-black text-white shadow-lg">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuSubCategoriesList;
