import { DiVim } from "react-icons/di";
import Banner from "./components/Banner";
import PopularProducts from "./components/PopularProducts";
import SummerCareTips from "./components/SummerCareTips";
import TopBrands from "./components/TopBrands";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
