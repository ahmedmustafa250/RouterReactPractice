import { useLocation } from "react-router-dom";

export default function Error() {
  let loc = useLocation();
  return <h1>Error 404 {loc.pathname} </h1>;
}
