import { Container } from "@mui/material";
import { Component } from "react";
import TopBanner from "./TopBanner";
import GrossDevelopmentValueCard from "./GrossDevelopmentValueCard";
import ConstructionCostsCard from "./ConstructionCostsCard";
import ExceptionalCard from "./ExceptionalCard";
import GroundBreakingVisionCard from "./GroundBreakingVisionCard";
import LandDevelopmentPromotionCard from "./LandDevelopmentPromotionCard";
import InvestmentArmCard from "./InvestmentArmCard";
import SitesCard from "./SitesCard";
import TrueQualityLastsCard from "./TrueQualityLastsCard";
import ContactCard from "./ContactCard";

class LandingPage extends Component {
  render() {
    return (
      <Container style={{ marginBottom: "18rem" }}>
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
      </Container>
    );
  }
}

export default LandingPage;
