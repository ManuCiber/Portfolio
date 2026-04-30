"use client"
import { useLanguage } from "./LanguageProvider"


export const Footer = () => {
    const {translation} = useLanguage()
    return (
        <footer className="py-8 px-6 border-t border-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground">
                    &copy; {new Date().getFullYear()} Carlos Tolentino {translation.footer.rights}
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/ManuCiber" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:carlosgameloft22@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}