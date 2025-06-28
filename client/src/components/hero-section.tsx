import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/portfolio-data";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {personalInfo.subtitle}. {personalInfo.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {personalInfo.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="gradient-primary text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg"></div>
            </div>
            
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 -z-5 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="w-80 h-80 mx-auto relative z-10">
              {/* Ribbon-style decorative border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-1">
                <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 p-2">
                  <img 
                    src="/attached_assets/Soumya Ranjan Mishra_1751111313017.png" 
                    alt={`${personalInfo.name} Professional Headshot`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              
              {/* Available for opportunities badge - positioned at bottom right */}
              <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
