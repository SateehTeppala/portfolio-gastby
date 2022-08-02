import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="TS" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
