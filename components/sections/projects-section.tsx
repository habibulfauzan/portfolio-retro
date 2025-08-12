"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistem Internal Apart",
      description:
        "Sistem internal sederhana untuk mengelola pemesanan kamar apartemen/hotel oleh resepsionis dan staf admin.",
      image: "",
      techStack: ["Next.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 2,
      title: "Sistem Surat Keluar Digital",
      description:
        "Sistem aplikasi manajemen surat keluar, generate surat berdasarkan template, role management, dan TTD dengan menggunakan QR Code.",
      image: "/projects/suratkeluar.png",
      techStack: ["Laravel", "Javascript", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/habibulfauzan/surat_keluar_digital",
      featured: true,
    },
    {
      id: 3,
      title: "Photobooth App",
      description: "Aplikasi web untuk membuat foto strip ala photobooth.",
      image: "/projects/photobooth.jpg",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://storied-flan-d1ffb0.netlify.app/",
      githubUrl: "https://github.com/habibulfauzan/photobooth",
      featured: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-head font-black text-foreground mb-4">
            Project Saya
          </h2>
          <p className="text-muted-foreground text-lg">Beberapa Project Saya</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card
                  variant="outline"
                  size="sm"
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-48 bg-muted flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <span className="text-muted-foreground font-head font-bold text-lg">
                          On Progress
                        </span>
                      </div>
                    )}

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="surface"
                          size="sm"
                          className="bg-primary text-primary-foreground"
                        >
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <Card.Content className="p-6 flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-head font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            size="sm"
                            className="text-xs bg-accent/20 text-accent-foreground border-accent/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-end pt-2 border-t border-border/20">
                        <div className="flex gap-2">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="text-primary hover:text-primary-hover text-xs font-medium"
                          >
                            View Live
                          </motion.a>
                          <span className="text-muted-foreground text-xs">
                            •
                          </span>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="text-muted-foreground hover:text-foreground text-xs font-medium"
                          >
                            Source
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-end mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-white hover:bg-primary hover:text-primary-foreground border-2 border-border"
              onClick={() => {
                window.open(
                  "https://github.com/habibulfauzan?tab=repositories",
                  "_blank"
                );
              }}
            >
              <Eye className="w-5 h-5" />
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
