import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Github, Smartphone, LayoutTemplate } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-24 bg-hero-bg/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">{t('projects.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full mt-8" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projectsData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name[i18n.language as 'pt' | 'en']}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.name[i18n.language as 'pt' | 'en']}
                      </h3>
                      <div className="flex gap-2">
                        {/* Dynamic Icons based on available URLs */}
                        {/* @ts-ignore */}
                        {project.webUrl && <Globe className="w-5 h-5 text-muted-foreground" />}
                        {/* @ts-ignore */}
                        {(project.iosUrl || project.androidUrl) && <Smartphone className="w-5 h-5 text-muted-foreground" />}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {project.description[i18n.language as 'pt' | 'en']}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border/50 flex flex-wrap gap-3">
                    {/* Web Link */}
                    {/* @ts-ignore */}
                    {project.webUrl && (
                      <Button asChild size="sm" className="flex-1 bg-gradient-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          {t('projects.web')}
                        </a>
                      </Button>
                    )}

                    {/* iOS Link */}
                    {/* @ts-ignore */}
                    {project.iosUrl && (
                      <Button asChild size="sm" variant="secondary" className="flex-1 hover:bg-secondary/80">
                        <a href={project.iosUrl} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-4 h-4 mr-2" />
                          {t('projects.ios')}
                        </a>
                      </Button>
                    )}

                    {/* Android Link */}
                    {/* @ts-ignore */}
                    {project.androidUrl && (
                      <Button asChild size="sm" variant="secondary" className="flex-1 hover:bg-secondary/80">
                        <a href={project.androidUrl} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-4 h-4 mr-2" />
                          {t('projects.android')}
                        </a>
                      </Button>
                    )}

                    {/* Code Link */}
                    {/* @ts-ignore */}
                    {project.codeUrl && (
                      <Button asChild variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-colors">
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label={t('projects.viewCode')}>
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;