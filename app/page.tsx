import React from "react";

import FeaturesSection from "@/components/FeaturesSection";
import HeaderSection from "@/components/HeaderSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <FeaturesSection />
      <AmenitiesSection />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default Home