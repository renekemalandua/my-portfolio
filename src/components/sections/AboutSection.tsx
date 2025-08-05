import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import skillsData from '@/data/skills.json';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '3+', label: t('about.years') },
    { value: '50+', label: t('about.projects') },
    { value: '100%', label: 'Satisfação' }
  ];


  return (
    <section id="about" ref={ref} className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">{t('about.skills')}</h3>
              
              <div className="space-y-4">
                {skillsData.skills.map((skillGroup, index) => (
                  <Card key={index} className="shadow-card hover:shadow-floating transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 text-primary">
                        {skillGroup.category[i18n.language as 'pt' | 'en']}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-tech-badge text-sm rounded-full border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;