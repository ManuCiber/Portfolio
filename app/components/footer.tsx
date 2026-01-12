export default function Footer() {
    return (
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
    )
}