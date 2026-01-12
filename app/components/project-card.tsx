import { useState } from 'react';
import { ExternalLink, Github, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Project } from '../app';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const handleDemoClick = () => {
    const isValidUrl = (url: string) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    }
    if(!isValidUrl(project.demoUrl)) {
      <Link href="/notFound" />;
      router.push('/notFound');
  } else {
      window.open(project.demoUrl, '_blank');
  }}

  const handleRepoClick = () => {
    if(!project.repoUrl || project.repoUrl === '') {
      <Link href="/notFound" />;
      router.push('/notFound');
  } else {
      window.open(project.repoUrl, '_blank');
  }
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-linear-to-br from-blue-100 to-indigo-100 overflow-hidden">
        <img
          src={`https://source.unsplash.com/800x600/?${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Destacado
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Expanded Description */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-3"
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>
        )}

        {/* Expand Button */}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm flex items-center gap-1 mb-4 hover:text-blue-700 transition-colors"
        >
          {isExpanded ? (
            <>
              Ver menos <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Ver más <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Category */}
        <div className="mb-4">
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3 mt-auto pt-4 border-t">
          {/* <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" className="w-full" size="sm">
              <Github className="w-4 h-4 mr-2" />
              Repositorio
            </Button>
          </a> */}
          <Button onClick={() => {handleDemoClick()}} className="max-w-full" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo            
          </Button>
          <Button variant="outline" onClick={() => {handleRepoClick()}} className='max-w-full' size="sm">
            <Github className="w-4 h-4 mr-2" />
            Repositorio
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

