"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";

interface ContactFormProps {
    translations: {
        title: string;
        subtitle: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        submitButton: string;
    };
}

export function ContactForm({translations}: ContactFormProps){
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setTimeout(()=> {setSubmitted(false)
            setFormData({name: "", email: "", message: ""})
        },3000)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
      <section id="contact" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="mb-6"
              style={{
                fontSize: "2.5rem",
                fontWeight: 600,
              }}
            >
              {translations.title}
            </h2>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "1.5rem", lineHeight: 1.7 }}
            >
              {translations.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
            <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-foreground" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                {translations.messagePlaceholder}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-background rounded-xl p-8 border border-border">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4" />
                  {translations.namePlaceholder}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder={translations.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-foreground">
                  <Mail className="w-4 h-4" />
                  {translations.emailPlaceholder}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder={translations.emailPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="w-4 h-4" />
                  {translations.messagePlaceholder}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder={translations.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{ fontSize: '1.125rem' }}
              >
                <Send className="w-5 h-5" />
                {translations.submitButton}
              </motion.button>
            </form>
          )}
          </motion.div>
        </div>
      </section>
    );
}
