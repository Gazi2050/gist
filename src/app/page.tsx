import Hero from '@/components/Hero';
import React from 'react';
import Features from '../components/Features';
import TrendingProjects from '@/components/TrendingProjects';
import Faq from '@/components/Faq';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import EditorSection from '@/components/EditorSection';

const page = () => {
  return (
    <>
      <Hero />
      <Features />
      <TrendingProjects />
      <EditorSection />
      <Faq />
      <Newsletter />
      <Footer />
    </>

  );
};

export default page;