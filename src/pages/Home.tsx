import { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import ConstructionCostsComponent from "../components/ConstructionCostsComponent";
import ContactComponent from "../components/ContactComponent";
import ExceptionalComponent from "../components/ExceptionalComponent";
import GrossDevelopmentValueComponent from "../components/GrossDevelopmentValueComponent";
import GroundBreakingVisionComponent from "../components/GroundBreakingVisionComponent";
import InvestmentArmComponent from "../components/InvestmentArmComponent";
import LandDevelopmentPromotionComponent from "../components/LandDevelopmentPromotionComponent";
import SitesComponent from "../components/SitesComponent";
import TopBanner from "../components/TopBanner";
import TrueQualityLastsComponent from "../components/TrueQualityLastsComponent";
import Footer from "../components/Footer";
import FooterComponent from "../components/FooterComponent";

const Home: FC<any> = (): ReactElement => {
  return (
    <Box>
      <TopBanner />
      <GrossDevelopmentValueComponent />
      <ConstructionCostsComponent />
      <ExceptionalComponent />
      <GroundBreakingVisionComponent />
      <LandDevelopmentPromotionComponent />
      <InvestmentArmComponent />
      <SitesComponent />
      {/* <TrueQualityLastsComponent /> */}
      {/* <ContactComponent /> */}
      {/* <FooterComponent /> */}
    </Box>
  );
};

export default Home;
