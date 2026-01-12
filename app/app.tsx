"use client";

import { useState } from "react";
import { ProjectCard } from "./components/project-card";
import { Header } from "./components/header";
import { FilterBar } from "./components/filter-bar";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Control de Muestras Médicas",
    description:
      "Sistema de inventario para gestión de muestras médicas para visitadores",
    longDescription:
      "Aplicación completa de gestión de inventario con sistema de alertas de stock bajo, registro de entregas, historial completo y notificaciones automáticas.",
    image: "medical-samples",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: "Web App",
    demoUrl: "https://demo.example.com/medical-samples",
    repoUrl: "https://github.com/usuario/medical-samples",
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce Dashboard",
    description:
      "Panel de administración para tienda en línea con análisis en tiempo real",
    longDescription:
      "Dashboard completo con estadísticas de ventas, gestión de productos, análisis de clientes y reportes detallados.",
    image: "ecommerce-dashboard",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    category: "Dashboard",
    demoUrl: "https://demo.example.com/ecommerce",
    repoUrl: "https://github.com/usuario/ecommerce-dashboard",
    featured: true,
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con drag & drop y colaboración en tiempo real",
    longDescription:
      "Sistema de gestión de proyectos tipo Kanban con funcionalidades de arrastrar y soltar, asignación de tareas y notificaciones.",
    image: "task-management",
    technologies: ["React", "TypeScript", "React DnD", "Tailwind CSS"],
    category: "Web App",
    demoUrl: "https://demo.example.com/tasks",
    repoUrl: "https://github.com/usuario/task-management",
    featured: false,
  },
  {
    id: "4",
    title: "Weather Forecast App",
    description:
      "Aplicación del clima con pronósticos detallados y mapas interactivos",
    longDescription:
      "Aplicación meteorológica con pronósticos por hora, mapas de radar, alertas climáticas y datos históricos.",
    image: "weather-app",
    technologies: ["React", "TypeScript", "OpenWeather API", "Leaflet"],
    category: "Web App",
    demoUrl: "https://demo.example.com/weather",
    repoUrl: "https://github.com/usuario/weather-app",
    featured: false,
  },
  {
    id: "5",
    title: "Portfolio Personal",
    description: "Sitio web personal con diseño moderno y animaciones fluidas",
    longDescription:
      "Portfolio profesional con secciones de proyectos, habilidades, experiencia y formulario de contacto.",
    image: "personal-portfolio",
    technologies: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    category: "Website",
    demoUrl: "https://demo.example.com/portfolio",
    repoUrl: "https://github.com/usuario/portfolio",
    featured: true,
  },
  {
    id: "6",
    title: "Blog Platform",
    description:
      "Plataforma de blogging con editor de contenido rico y SEO optimizado",
    longDescription:
      "Sistema de blog completo con editor WYSIWYG, categorías, etiquetas, búsqueda y optimización SEO.",
    image: "blog-platform",
    technologies: ["React", "TypeScript", "MDX", "Next.js"],
    category: "Website",
    demoUrl: "https://demo.example.com/blog",
    repoUrl: "https://github.com/usuario/blog-platform",
    featured: false,
  },
];

const categories = ["Todos", "Web App", "Dashboard", "Website"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 &&
          selectedCategory === "Todos" &&
          !searchTerm && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <h2 className="text-gray-900">Proyectos Destacados</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

        {/* All Projects */}
        <section>
          {selectedCategory === "Todos" && !searchTerm && (
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <h2 className="text-gray-900">Todos los Proyectos</h2>
            </div>
          )}

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Code2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500 mb-2">No se encontraron proyectos</p>
              <p className="text-gray-400">
                Intenta con otros filtros o términos de búsqueda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "Todos" && !searchTerm
                ? regularProjects
                : filteredProjects
              ).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-900 mb-3">Sobre Mí</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias web
                excepcionales con tecnologías modernas.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-3">Proyectos</h3>
              <p className="text-gray-600 text-sm">
                {projects.length} proyectos completados
              </p>
              <p className="text-gray-600 text-sm">
                {projects.filter((p) => p.featured).length} proyectos destacados
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-3">Contacto</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:tu@email.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
