"use client"

import {motion} from "framer-motion"
import { useLanguage } from "./LanguageProvider"
import { Award } from "lucide-react"

export const AboutMe = () => {
    const { translation } = useLanguage()
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                initial={{opacity: 0, y:20}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true, margin: "-100px"}}
                transition={{duration: 0.6}}
                className="lg:col-span-3 space-y-6"
                >
                    <h2 style={{fontSize:"2.5rem", fontWeight:600}}>{translation.about.title}</h2>

                <div className="space-y-4 text-muted-foreground" style={{fontSize: "1.125rem", lineHeight: 1.8}}>
                    <p>{translation.about.paragraph1}</p>
                    <p>{translation.about.paragraph2}</p>
                    <p>{translation.about.paragraph3}</p>
                </div>
                </motion.div>
            </div>
            {/*Certifications*/}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-10 mt-12"
            >
              <div>
                <h3
                  className="mb-4 flex items-center gap-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  <Award className="w-5 h-5" />
                  {translation.about.certifications}
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="font-medium">
                      Web Development Certification
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Talent Digital • 2026
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="font-medium">
                      Git Essentials
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Todo Code • 2025
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  {translation.about.interests}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Open Source",
                    "Cloud Computing",
                    "DevOps",
                    "Mobile Apps",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full border border-border"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
        </section>
    )
}