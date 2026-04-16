"use client"

import { useState } from "react"
import { Language, translations } from "./translations"
import {motion} from "framer-motion"
import { skills } from "@/data/data"

export const SkillsSection = () => {
    const [language, setLanguage] = useState<Language>("en")
    const translation = translations[language]

    return (
        <section className="py-16 px-6 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true, margin: "-100px"}}
                transition={{ duration: 0.6 }}>
                    <h2>{translation.skills.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon
                            const skillName = index === 0
                            ? translation.skills.frontend
                            : index === 1
                                ? translation.skills.backend
                                : translation.skills.design
                                return (
                                    <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, delay: index*0.1}}
                                    className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-background rounded-lg">
                                                <Icon className="w-5 h-5"/>
                                                <h3 style={{fontSize: "1.125rem", fontWeight:500}}>{skillName}</h3>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item)=> (
                                                <span key={item} className="px-3 py-1 bg-background text-foreground rounded-mb border border-border" style={{fontSize: "0.875rem"}}>{item}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}