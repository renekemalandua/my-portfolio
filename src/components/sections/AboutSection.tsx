import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

          {/* About Content */}
          <div className="space-y-12">
            {/* Description and Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="text-center p-6 bg-card rounded-lg shadow-card"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tabbed Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <Tabs defaultValue="skills" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                  <TabsTrigger value="skills">{t('about.skills')}</TabsTrigger>
                  <TabsTrigger value="experience">{t('about.experience')}</TabsTrigger>
                  <TabsTrigger value="education">{t('about.education')}</TabsTrigger>
                  <TabsTrigger value="more">{t('about.certifications')} & {t('about.languages')}</TabsTrigger>
                </TabsList>

                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {skillsData.skills.map((skillGroup, index) => (
                      <Card key={index} className="shadow-card hover:shadow-floating transition-all hover:scale-105">
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
                </TabsContent>

                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-6">
                  <div className="space-y-6">
                    {experienceData.experience.map((exp, index) => (
                      <Card key={index} className="shadow-card hover:shadow-floating transition-all">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                              <h4 className="font-semibold text-lg text-foreground">
                                {exp.position[i18n.language as 'pt' | 'en']}
                              </h4>
                              <p className="text-primary font-medium">{exp.company}</p>
                              <p className="text-sm text-muted-foreground">{exp.location}</p>
                            </div>
                            <Badge variant="outline" className="mt-2 md:mt-0">
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {exp.description[i18n.language as 'pt' | 'en']}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {educationData.education.map((edu, index) => (
                      <Card key={index} className="shadow-card hover:shadow-floating transition-all">
                        <CardContent className="p-6">
                          <div className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold text-lg text-foreground mb-2">
                              {edu.degree[i18n.language as 'pt' | 'en']}
                            </h4>
                            <p className="text-primary font-medium">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-2">
                              <Badge variant="outline">{edu.period}</Badge>
                              <span className="text-sm text-muted-foreground">{edu.location}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Certifications & Languages Tab */}
                <TabsContent value="more" className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.certifications')}</h3>
                        <div className="space-y-4">
                          {educationData.certifications.map((cert, index) => (
                            <div key={index} className="flex justify-between items-start p-4 bg-tech-badge rounded-lg">
                              <div>
                                <h4 className="font-medium text-foreground">{cert.name}</h4>
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                              </div>
                              <Badge variant="outline">
                                {cert.year}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Languages */}
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-primary">{t('about.languages')}</h3>
                        <div className="space-y-3">
                          {educationData.languages.map((lang, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-tech-badge rounded-lg">
                              <span className="font-medium text-foreground">
                                {lang.language[i18n.language as 'pt' | 'en']}
                              </span>
                              <Badge variant="secondary">
                                {lang.level[i18n.language as 'pt' | 'en']}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;