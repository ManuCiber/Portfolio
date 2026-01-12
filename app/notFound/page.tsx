'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Mail, HelpCircle, Map } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div 
        className={`max-w-lg w-full text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Ilustración animada */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center mb-6 relative overflow-hidden">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 gradient-to-br from-blue-100 to-purple-100 rounded-full"></div>
            
            {/* Cara triste animada */}
            <div className="relative z-10">
              <div className="w-24 h-24 border-4 border-gray-700 rounded-full relative">
                {/* Ojos que parpadean */}
                <div className="absolute top-7 left-5 w-3 h-3 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="absolute top-7 right-5 w-3 h-3 bg-gray-700 rounded-full animate-pulse"></div>
                {/* Boca triste */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-4 border-gray-700 rounded-b-full"></div>
              </div>
            </div>
            
            {/* Partículas flotantes */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
            <div className="absolute top-6 right-6 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Número 404 con efecto */}
        <div className="mb-6">
          <h1 className="text-9xl font-black text-transparent bg-clip-text gradient-to-r from-blue-600 to-purple-600 mb-2">
            404
          </h1>
          <div className="w-24 h-1 gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Página no encontrada!
        </h2>

        {/* Descripción */}
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Lo sentimos, pero la página que buscas no existe o ha sido movida.
          <br />
          <span className="text-sm text-gray-500 mt-2 block">
            Puede que el enlace esté roto o la página haya sido eliminada.
          </span>
        </p>

        {/* Botones con efectos */}
        <div className="space-y-4">
          <Button
            asChild
            className="w-full gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <Link href="/" className="flex items-center justify-center">
              <Home className="mr-3 group-hover:animate-bounce" size={20} />
              Volver al inicio
            </Link>
          </Button>
          
          <Button
            onClick={handleGoBack}
            variant="outline"
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-6 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 group"
          >
            <ArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform" size={20} />
            Página anterior
          </Button>
        </div>

        {/* Enlaces adicionales */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">¿Necesitas ayuda?</p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 text-sm hover:underline flex items-center gap-1"
            >
              <Mail size={14} />
              Contacto
            </Link>
            <Link 
              href="/help" 
              className="text-blue-600 hover:text-blue-700 text-sm hover:underline flex items-center gap-1"
            >
              <HelpCircle size={14} />
              Ayuda
            </Link>
            <Link 
              href="/sitemap" 
              className="text-blue-600 hover:text-blue-700 text-sm hover:underline flex items-center gap-1"
            >
              <Map size={14} />
              Mapa del sitio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}