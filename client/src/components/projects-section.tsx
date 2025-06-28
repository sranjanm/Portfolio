import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import RibbonHeading from "@/components/ribbon-heading";
import ProjectDetailModal from "@/components/project-detail-modal";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  category: string;
  status: string;
  technologies: string[];
  color: string;
  challenges?: string[];
  outcomes?: string[];
  duration?: string;
  team?: string;
  role?: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      secondary: "text-secondary bg-secondary/10",
      accent: "text-accent bg-accent/10",
      purple: "text-purple-500 bg-purple-500/10",
      orange: "text-orange-500 bg-orange-500/10",
      pink: "text-pink-500 bg-pink-500/10",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RibbonHeading 
          title="Featured Projects" 
          subtitle="Innovative solutions bridging research and practical applications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 hover:border-border cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge className={getColorClasses(project.color)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${getColorClasses(project.color).split(' ')[0]}`}>
                        {project.category}
                      </span>
                      <ExternalLink className={`w-5 h-5 ${getColorClasses(project.color).split(' ')[0]}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </section>
  );
}
