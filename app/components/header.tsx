import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900">Mi Portfolio</h1>
              <p className="text-gray-600 text-sm">Desarrollador Full Stack</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#proyectos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Proyectos
            </a>
            <a href="#sobre-mi" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre Mí
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="mailto:tu@email.com">
              <Button size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
