"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Award, Users, BookOpenText, Download } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Award,
      title: "Pengalaman",
      value: "Magang, Project, dan Freelance",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "TeamWork",
      value: "Dapat bekerja sama dengan tim",
      delay: 0.4,
    },
    {
      icon: BookOpenText,
      title: "Pembelajar Aktif",
      value: "Mengikuti Tren Teknologi Terbaru",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-19 mx-2 sm:mx-3 bg-primary rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-4xl">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-45">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-head font-black text-foreground mb-2 sm:mb-4">
            Tentang Saya
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Sedikit Tentang Saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-75 lg:h-75 bg-foreground rounded-2xl sm:rounded-3xl flex items-center justify-center border-2 sm:border-4 border-border shadow-lg">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-head font-black text-primary">
                  HF
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-foreground shadow-lg shadow-white rotate-45"
                animate={{
                  rotate: [45, 55, 45],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent shadow-foreground rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3">
              {stats.map(({ icon: Icon, title, value, delay }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay }}
                  viewport={{ once: true }}
                >
                  <Card
                    variant="outline"
                    size="sm"
                    className="text-center p-2 sm:p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="space-y-1 sm:space-y-1.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-primary" />
                      <h3 className="font-head font-bold text-xs sm:text-xs text-primary">
                        {title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        {value}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Mahasiswa aktif di Universitas Islam Negeri Sultan Syarif Kasim
                Riau, Fakultas Teknik, Jurusan Teknik Informatika. Saya memiliki
                pengalaman dalam pegembangan web, dengan menggunakan teknologi
                terkini seperti Next.js, Laravel, dan Tailwind CSS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 sm:gap-3 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  onClick={() => {
                    window.open("/CV.pdf", "_blank");
                  }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
