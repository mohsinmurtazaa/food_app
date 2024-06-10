import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3 style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};
export default Error;
