import "animate.css";
import Navbar from "@/components/global/navbar/Navbar";
import Header from "./home/Header";
import SuccesResult from "./home/SuccesResult";
import Explore from "./Explore";
import RankingRevenue from "./RankingRevenue";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <SuccesResult />
      <Explore />
      <RankingRevenue />
    </main>
  );
}
