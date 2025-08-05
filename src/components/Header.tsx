import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient"
          >
            JS
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex"
            >
              <Globe className="h-4 w-4" />
              <span className="ml-1 text-xs">{i18n.language.toUpperCase()}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="justify-start"
              >
                <Globe className="h-4 w-4 mr-2" />
                {i18n.language === 'pt' ? 'English' : 'Português'}
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;