"use client"

import {motion} from "framer-motion"
import { Language, translations } from "./translations"
import { useState } from "react"
import { ArrowRight, Mail} from "lucide-react"
import { useTheme } from "next-themes"

export const HeroSection = () => {
    const [languaje, setLanguage] = useState<Language>("en")
    const translation = translations[languaje]
    const {theme} = useTheme()
    const iconSrc = theme === "dark" ? "/github-light.svg" : "/github.svg"


    return (
        <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{opacity: 0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 0.7, delay: 0.2}}>
                    <div className="inline-block px-4 py-1 5 rounded-full bg-secondary text-secondary-foreground mb-6">
                        {translation.hero.badge}
                    </div>
                    <h1 className="mb-6" style={{fontSize: "clamp(2.5rem, 5vw, 4rem)",fontWeight:600, lineHeight:1.1}}>
                        {translation.hero.title}
                    </h1>
                    <p className="mb-8 text-muted-foreground max-w-xl" style={{fontSize: "1.25rem", lineHeight: 1.7}}>
                        {translation.hero.description}
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                            {translation.hero.viewProjects}
                            <ArrowRight className="w-4 h-4"/>
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                            {translation.hero.getInTouch}
                        </a>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <a href="https://github.com/manuciber" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <img src={iconSrc} alt="GitHub" className="w-6 h-6"/>
                        </a>
                        <a href="https://linkedin.com/in/manuciber" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                        </a>
                        <a href="https://linkedin.com/in/manuciber" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Mail className="w-4 h-4"/>
                        </a>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.7, delay: 0.4}}
                className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Deleloper workspace" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}