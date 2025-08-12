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
    <section className="py-4 sm:py-8 lg:py-12 bg-primary rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl overflow-hidden">
      <div className="w-full max-w-none sm:max-w-6xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6 lg:mb-8"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-head font-black text-foreground mb-1 sm:mb-2">
            Tentang Saya
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Sedikit Tentang Saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full max-w-4xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 lg:mb-0"
          >
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-foreground rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-border shadow-lg">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-head font-black text-primary">
                  HF
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-foreground shadow-lg shadow-white rotate-45"
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
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-5 sm:h-5 bg-accent shadow-foreground rounded-full"
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
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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
                    className="text-center p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white min-h-[90px] sm:min-h-[100px]"
                  >
                    <div className="space-y-2 flex flex-col justify-center h-full">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-primary" />
                      <h3 className="font-head font-bold text-xs sm:text-sm text-primary leading-tight">
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
              className="space-y-4 sm:space-y-5"
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
                  className="gap-2 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base px-6 py-3 w-full sm:w-auto"
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
