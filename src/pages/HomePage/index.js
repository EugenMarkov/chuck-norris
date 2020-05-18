import React from "react";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";
import BackToTop from "../../components/common/GoUpButton";
import HomePageContent from "../../components/HomePageContent";

export default function HomePage() {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <HomePageContent />
    </>
  );
}
