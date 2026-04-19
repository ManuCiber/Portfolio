"use client"

import { useLanguage } from "./LanguageProvider"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { EducationSection } from "./EducationSection"

export const ExperienceSection = () => {
  const { translation: t } = useLanguage()

  const jobs = [
    {
      key: "job1",
      dateRange: `Jan 2026 - ${t.experience.present}`,
      title: t.experience.job1.title,
      company: t.experience.job1.company,
      description: t.experience.job1.description,
      isPrimary: true,
    },
    {
      key: "job2",
      dateRange: "Jun 2025 - Dec 2025",
      title: t.experience.job2.title,
      company: t.experience.job2.company,
      description: t.experience.job2.description,
      isPrimary: false,
    },
    {
      key: "job3",
      dateRange: "Sep 2024 - May 2025",
      title: t.experience.job3.title,
      company: t.experience.job3.company,
      description: t.experience.job3.description,
      isPrimary: false,
    },
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 600 }}>
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6" />
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                {t.experience.experienceTab}
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-1.75 before:top-8 before:bottom-8 before:w-px before:bg-border">
              {jobs.map((job) => (
                <div key={job.key} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-background ${
                      job.isPrimary ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                  <div className="space-y-2">
                    <div
                      className="flex items-center gap-2 text-muted-foreground"
                      style={{ fontSize: "0.875rem" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{job.dateRange}</span>
                    </div>
                    <h4 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      {job.title}
                    </h4>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}
                    >
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <EducationSection />
          </motion.div>
        </div>
      </div>
    </section>
  )
}