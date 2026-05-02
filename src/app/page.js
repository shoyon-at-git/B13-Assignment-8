import { DiVim } from "react-icons/di";
import Banner from "./components/Banner";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
    </div>
  );
}
