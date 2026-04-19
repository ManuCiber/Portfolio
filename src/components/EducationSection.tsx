"use client"

import { useLanguage } from "./LanguageProvider"
import { motion } from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"


export const EducationSection = () => {
    
    const { translation: t } = useLanguage()
    
    
    
    return (
      <section id="experience" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-6 h-6" />
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              {t.experience.educationTab}
            </h3>
          </div>

          <div className="space-y-8 relative before:absolute before:left-1.75 before:top-8 before:bottom-8 before:w-px before:bg-border">
            {[
              {
                key: "edu1",
                dateRange: "2023 - 2027",
                title: t.experience.edu1.title,
                institution: t.experience.edu1.institution,
                description: t.experience.edu1.description,
                isPrimary: true,
              },
              {
                key: "edu2",
                dateRange: "2024",
                title: t.experience.edu2.title,
                institution: t.experience.edu2.institution,
                description: t.experience.edu2.description,
                isPrimary: false,
              },
            ].map((edu) => (
              <div key={edu.key} className="relative pl-8">
                <div
                  className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-background ${
                    edu.isPrimary ? "bg-primary" : "bg-secondary"
                  }`}
                />
                <div className="space-y-2">
                  <div
                    className="flex items-center gap-2 text-muted-foreground"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{edu.dateRange}</span>
                  </div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                    {edu.title}
                  </h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            {[
              { value: "3+", label: t.experience.projectsCompleted },
              { value: "1+", label: t.experience.yearsLearning },
            ].map((stat) => (
              <div
                key={stat.value}
                className="p-6 bg-secondary/50 rounded-lg border border-border text-center"
              >
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div
                  className="text-muted-foreground"
                  style={{ fontSize: "0.875rem" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    );
}