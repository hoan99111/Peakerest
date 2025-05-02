import { useSearchParams } from "react-router";
import Gallery from "../../components/Gallery/Gallery";
import "./searchPage.css";

export const SearchPage = () => {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  return <Gallery search={search} />;
};
