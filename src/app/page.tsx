"use client"
import Hero from '@/components/Hero';
import React from 'react';
import Features from '../components/Features';
import Faq from '@/components/Faq';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import EditorSection from '@/components/EditorSection';

const Page = () => {
  return (
    <>
      <Hero />
      <Features />
      <EditorSection />
      <Faq />
      <Newsletter />
      <Footer />
    </>

  );
};

export default Page;