import Hero from '@/components/Hero';
import React from 'react';
import Features from '../components/Features';
import TrendingProjects from '@/components/TrendingProjects';
import Editor from '@/components/Editor';
import Extra from '@/components/Extra';
import Faq from '@/components/Faq';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Hero />
      <Features />
      <TrendingProjects />
      <Editor />
      <Extra />
      <Faq />
      <Newsletter />
      <Footer />
    </>

  );
};

export default page;