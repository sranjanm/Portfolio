import { motion } from "framer-motion";

interface RibbonHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function RibbonHeading({ title, subtitle, className = "" }: RibbonHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <div className="relative inline-block">
        <div className="relative bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-lg shadow-lg transform -skew-x-3">
          <h2 className="text-4xl font-bold transform skew-x-3">{title}</h2>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-60"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full opacity-60"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform -skew-x-3 blur-sm -z-10"></div>
      </div>
      {subtitle && (
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}