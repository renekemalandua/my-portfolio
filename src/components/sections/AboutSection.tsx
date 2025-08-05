import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import skillsData from '@/data/skills.json';
import educationData from '@/data/education.json';
import experienceData from '@/data/experience.json';

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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About Text & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
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

              {/* Education */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.education')}</h3>
                  <div className="space-y-4">
                    {educationData.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium text-foreground">
                          {edu.degree[i18n.language as 'pt' | 'en']}
                        </h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-muted-foreground">{edu.period}</span>
                          <span className="text-xs text-muted-foreground">{edu.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.experience')}</h3>
                  <div className="space-y-6">
                    {experienceData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4 last:pb-0">
                        <h4 className="font-semibold text-foreground">
                          {exp.position[i18n.language as 'pt' | 'en']}
                        </h4>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                        <div className="flex justify-between items-center mt-1 mb-2">
                          <span className="text-xs text-muted-foreground">{exp.period}</span>
                          <span className="text-xs text-muted-foreground">{exp.location}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.description[i18n.language as 'pt' | 'en']}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.languages')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {educationData.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {lang.language[i18n.language as 'pt' | 'en']} - {lang.level[i18n.language as 'pt' | 'en']}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Skills & Certifications */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Skills */}
              <div>
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
              </div>

              {/* Certifications */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.certifications')}</h3>
                  <div className="space-y-3">
                    {educationData.certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-start p-3 bg-tech-badge rounded-lg">
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;