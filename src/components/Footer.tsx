import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            JS
          </div>
          
          {/* Navigation Links */}
          <nav className="flex justify-center space-x-8 text-sm">
            <a 
              href="#home" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Afonso Kemalandua. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-1">
              <span>{t('footer.built')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
