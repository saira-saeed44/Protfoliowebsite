import React from "react";
import Intro from "./Components/common/intro.jsx";
import CardList from "./Components/common/CardList.jsx";
import TestimonialsList from "./Components/common/TestimonialsList.jsx";
import Footer from "./Components/layout/Footer.jsx";
import ContactForm from "./Components/common/ContactForm.jsx";
import cvImage from "../public/images/home.png";
import Sections from "./Components/common/Sections.jsx";
import BrandsList from "./Components/common/BrandsList.jsx";
import PortfolioList from "./Components/common/PortfolioList.jsx";
import EducationList from "./Components/common/EducationList.jsx";
import ExperienceList from "./Components/common/ExperienceList.jsx";
const App = () => {
  return (
    <div className="bg-gray-100">
      <Intro
        imageUrl={cvImage}
        name="Saira Saeed"
        heading="Frontend Developer"
        paragraph="I have a passion for software. I enjoy creating tools that make life easier for people."
      />
      <CardList />
      <div className="mb-10 px-5 lg:mb-0">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5 ">
          Portfolio
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base">
          I have brought here my biggest and favorite <br></br> works
          <br></br> as a professional.
        </p>
        <PortfolioList />
      </div>
      <EducationList />
      <Sections />
      <ExperienceList />
      <BrandsList />
      <TestimonialsList />
      <Footer />
      <ContactForm />
    </div>
  );
};

export default App;
