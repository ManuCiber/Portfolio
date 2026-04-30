"use client";
import { ContactForm } from "./ContactForm/ContactForm";
import { useLanguage } from "./LanguageProvider"
import {motion} from "framer-motion"

export const ProjectsSection = () => {
    const {translation} = useLanguage();
    const contactTranslations = {
        ...translation.contact,
        submitButton: translation.contact.sendButton,
    };

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-100px"}}
                transition={{ duration: 0.6 }}
                className="mb-16">
                    <h2 className="mb-4" style={{fontSize: "2.5rem", fontWeight: 600}}>{translation.projects.title}</h2>
                </motion.div>
                <div className="space-y-24">
                    <p className="text-muted-foreground">En Proceso...</p>
                    {}
                </div>
            </div>
            <ContactForm translations={contactTranslations}/>
        </section>
    )
}