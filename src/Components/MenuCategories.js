import MenuSubCategoriesList from "./MenuSubCategoriesList";

const MenuCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <MenuSubCategoriesList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default MenuCategories;
