"use client"

import { motion } from "framer-motion"
import { Code2, Languages, Moon, Sun } from "lucide-react"
import { Language, translations } from "./translations"
import { useState } from "react"
import { useTheme } from "next-themes"



export const Header  = () => {
    const [languaje, setLanguage] = useState<Language>("en")
    const {theme, setTheme} = useTheme()
    const translation = translations[languaje]

    const toogleLanguage = () => {
        setLanguage(languaje === "en" ? "es": "en")
    }

    const toogleTheme = () => {
        setTheme(theme === "dark" ? "light": "dark")
    }

    return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Code2 className="w-6 h-6" />
            <span className="font-medium">Carlos Tolentino</span>
            </motion.div>

            <div className="flex items-center gap-6">
                <motion.div
                initial={{opacity: 0, x:20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                className="hidden md:flex items-center gap-6"
                >
                    <a href="#about" className="text-muted-foreground hover:text-foreground">
                        {translation.nav.about}
                    </a>
                    <a href="#experience" className="text-muted-foreground hover:text-foreground">
                        {translation.nav.experience}
                    </a>
                    <a href="#projects" className="text-muted-foreground hover:text-foreground">
                        {translation.nav.projects}
                    </a>
                    <a href="#contact" className="text-muted-foreground hover:text-foreground">
                        {translation.nav.contact}
                    </a>
                </motion.div>
                <div className="flex items-center gap-2">
                    <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={toogleTheme}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Toggle theme">
                        {theme === "dark" ? (<Sun className="w-5 h-5" />) : (<Moon className="w-5 h-5" />)}
                    </motion.button>                   
                    <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    onClick={toogleLanguage}
                    className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
                    aria-label="Toggle language">
                        <Languages className="w-5 h-5" />
                        <span className="text-sm font-medium">
                            {languaje.toUpperCase()}
                        </span>
                    </motion.button>                   
                </div>
            </div>
        </div>
      </nav>
    );
}