import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Target, DollarSign } from "lucide-react";
import { publications, researchMetrics, researchAreas, certifications } from "@/data/portfolio-data";
import RibbonHeading from "@/components/ribbon-heading";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RibbonHeading 
          title="Research & Publications" 
          subtitle="Contributing to the scientific community through peer-reviewed research"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Recent Publications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-primary" />
              Recent Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pub.authors} ({pub.year}). {pub.venue}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Impact & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-secondary" />
                Research Impact
              </h3>

              <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{researchMetrics.publications}</div>
                    <div className="text-sm text-muted-foreground">Peer-Reviewed Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{researchMetrics.mlAccuracy}</div>
                    <div className="text-sm text-muted-foreground">ML Algorithm Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{researchMetrics.simulationImprovement}</div>
                    <div className="text-sm text-muted-foreground">Simulation Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">{researchMetrics.grantSecured}</div>
                    <div className="text-sm text-muted-foreground">CGCA Grant Secured</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Research Areas
                </h4>
                <div className="space-y-3">
                  {researchAreas.map((area, index) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{area.name}</span>
                      </div>
                      <Progress value={area.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-4">Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
