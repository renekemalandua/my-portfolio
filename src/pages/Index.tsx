import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import '@/i18n';

const PortfolioContent = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;
