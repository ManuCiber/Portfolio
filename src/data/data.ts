import { Code2, Database, Palette } from "lucide-react";

export const projects = [
    {
      image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#"
    }
  ];

export const skills = [
    { icon: Code2, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { icon: Database, items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
    { icon: Palette, items: ["Figma", "Git", "Responsive Design"] }
  ];

export const certifications = [
    {name: "Desarrollo Web",
     institution: "Platzi"
    },
    {name: "Desarrollo Frontend",
     institution: "Platzi"
    },
]