import React from 'react';
import MindBloomNavbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import MoodCategories from './components/MoodCategories';
import CalmingMessage from './components/CalmingMessage';
import FullWidthImage from './components/FullWidthImage';
import QuestionsSection from './components/QuestionsSection';
import Footer from './components/Footer';
import CrisisContact from './components/CrisisContact';
import InfoSection from './components/InfoSection';
import WhatWeDo from './components/WhatWeDo';


function App() {
  return (
    <>
      <MindBloomNavbar />
      <HeroCarousel />
      <CalmingMessage />
      <MoodCategories />
      <FullWidthImage />
      <WhatWeDo />
      {/* InfoSection should be placed after WhatWeDo for better content flow */}
      <InfoSection />
      {/* QuestionsSection should be placed after InfoSection for better flow */}
      <QuestionsSection />
      <CrisisContact />
      <Footer />
      {/* More components will go here later */}
    </>
  );
}

export default App;
