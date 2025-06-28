import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio-data";
import RibbonHeading from "@/components/ribbon-heading";

export default function ExperienceTimeline() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary border-primary text-primary",
      secondary: "bg-secondary border-secondary text-secondary", 
      accent: "bg-accent border-accent text-accent",
      purple: "bg-purple-500 border-purple-500 text-purple-500",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RibbonHeading 
          title="Professional Experience" 
          subtitle="A journey through innovation, research, and technical leadership"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 gradient-primary hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge className={`mb-2 text-white font-semibold ${getColorClasses(exp.color).split(' ')[0]} border-0`}>
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="text-muted-foreground font-medium mb-3">
                        {exp.company} • {exp.location}
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="text-sm space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background hidden lg:block ${getColorClasses(exp.color).split(' ')[0]}`}></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"} hidden lg:block`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
