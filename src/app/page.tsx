"use client";
import "animate.css";
import Navbar from "@/components/global/navbar/Navbar";
import Header from "./home/Header";
import SuccesResult from "./home/SuccesResult";
import Explore from "./Explore";
import RankingRevenue from "./RankingRevenue";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Services from "./Services";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  });

  return (
    <main>
      <Navbar />
      <Header />
      <SuccesResult />
      <Explore />
      <RankingRevenue />
      <Services />
    </main>
  );
}
