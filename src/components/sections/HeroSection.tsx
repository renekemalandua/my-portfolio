import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com', 
      label: 'GitHub' 
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn' 
    },
    { 
      icon: HiMail, 
      href: 'mailto:contato@joaosilva.dev', 
      label: 'Email' 
    }
  ];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">{t('hero.name')}</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-8"
          >
            {t('hero.role')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
            >
              <a href="#projects">
                {t('hero.cta')}
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/5"
            >
              <a href="#contact">
                {t('hero.contact')}
              </a>
            </Button>
            
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-secondary/80 hover:bg-secondary"
            >
              <a href="/cv.pdf" download="Afonso_Kemalandua_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                {t('hero.downloadCV')}
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-background/50 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 transition-colors shadow-card hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5 mb-2" />
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;