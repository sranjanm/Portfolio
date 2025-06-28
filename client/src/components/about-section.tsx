import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/portfolio-data";
import RibbonHeading from "@/components/ribbon-heading";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RibbonHeading 
          title="About Me" 
          subtitle="From stages to simulations—a rockstar at heart, a researcher by trade. Combining technical expertise with creative innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Professional Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              PhD graduate from the University of Toronto with interdisciplinary expertise in research and development, 
              product design, and medical device innovation. Proven track record in leading end-to-end development of 
              complex healthcare technologies with specialization in systems engineering and computational modeling.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Adept in applying data-driven approaches—including machine learning, simulation, and business intelligence 
              tools—for design optimization and decision support. Currently seeking impactful opportunities where 
              engineering rigor and cross-functional collaboration drive innovation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">PhD in Mechanical & Industrial Engineering (GPA: 3.8/4.0)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-medium">5+ years R&D experience in medical devices</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">Published researcher with 7+ peer-reviewed articles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Band Manager/Guitarist - Rewind India (Toronto)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
