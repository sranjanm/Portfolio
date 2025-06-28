import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, User, CheckCircle, AlertCircle } from "lucide-react";

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

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10 border-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20",
      accent: "text-accent bg-accent/10 border-accent/20",
      purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      pink: "text-pink-500 bg-pink-500/10 border-pink-500/20",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
      case 'patent pending':
      case 'consulting':
      case 'creative':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'ongoing':
      case 'data science':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className={`${getColorClasses(project.color)} flex items-center gap-1`}>
                {getStatusIcon(project.status)}
                {project.status}
              </Badge>
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>
          </motion.div>

          {/* Project Overview */}
          {(project.duration || project.team || project.role) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.duration && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Duration:</span>
                  <span>{project.duration}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Team:</span>
                  <span>{project.team}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Role:</span>
                  <span>{project.role}</span>
                </div>
              )}
            </div>
          )}

          <Separator />

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                {project.detailedDescription?.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Challenges and Outcomes */}
          {(project.challenges || project.outcomes) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcomes && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes?.map((outcome, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}