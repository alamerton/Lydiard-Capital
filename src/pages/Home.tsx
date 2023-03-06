import React, { ReactElement, FC } from "react";
import { Box, Container } from "@mui/material";
import ConstructionCostsCard from "../components/ConstructionCostsCard";
import ContactCard from "../components/ContactCard";
import ExceptionalCard from "../components/ExceptionalCard";
import GrossDevelopmentValueCard from "../components/GrossDevelopmentValueCard";
import GroundBreakingVisionCard from "../components/GroundBreakingVisionCard";
import InvestmentArmCard from "../components/InvestmentArmCard";
import LandDevelopmentPromotionCard from "../components/LandDevelopmentPromotionCard";
import SitesCard from "../components/SitesCard";
import TopBanner from "../components/TopBanner";
import TrueQualityLastsCard from "../components/TrueQualityLastsCard";

const Home: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        marginBottom: "18rem",
      }}
    >
      <TopBanner />
      <GrossDevelopmentValueCard />
      <ConstructionCostsCard />
      <ExceptionalCard />
      <GroundBreakingVisionCard />
      <LandDevelopmentPromotionCard />
      <InvestmentArmCard />
      <SitesCard />
      <TrueQualityLastsCard />
      <ContactCard />
    </Box>
  );
};

export default Home;
