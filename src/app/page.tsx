"use client";
import "animate.css";
import Navbar from "@/components/global/navbar/Navbar";
import Header from "./home/Header";
import SuccesResult from "./home/SuccesResult";
import Explore from "./home/Explore";
import RankingRevenue from "./home/RankingRevenue";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Services from "./home/Services";
import StepsPlan from "./home/StepsPlan";
import BrandingSlider from "./home/BrandingSlider";
import Employe from "./home/Employe";
import FrequnlyQuestion from "./home/FrequnlyQuestion";
import Contact from "./home/Contact";
import Footer from "./home/Footer";

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
      <StepsPlan />
      <BrandingSlider />
      <Employe />
      <FrequnlyQuestion />
      <Contact />
      <Footer />
    </main>
  );
}
