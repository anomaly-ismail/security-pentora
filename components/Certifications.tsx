"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const CERTS = [
  { src: "/oscp.png", name: "OSCP", full: "Offensive Security Certified Professional", lightBg: false },
  { src: "/osep.png", name: "OSEP", full: "Offensive Security Experienced Penetration Tester", lightBg: false },
  { src: "/oswe.png", name: "OSWE", full: "Offensive Security Web Expert", lightBg: false },
  { src: "/GXPN.png", name: "GXPN", full: "GIAC Exploit Researcher and Advanced Pentester", lightBg: false },
  { src: "/ceh.png", name: "CEH", full: "Certified Ethical Hacker", lightBg: true },
];

export default function Certifications() {
  return (
    <section id="sertifikalar" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="SERTİFİKASYONLAR"
          title={
            <>
              Sektörün en saygın{" "}
              <span className="text-gradient-static">ofansif güvenlik</span>{" "}
              sertifikalarına sahibiz
            </>
          }
          description="Pentora ekibi; uluslararası geçerliliği olan, pratik beceri odaklı sertifikalarla doğrulanmış uzmanlardan oluşur."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/8 bg-surface/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-transparent to-primary/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex h-full flex-col items-center justify-between">
                <div
                  className={`relative flex h-24 w-24 items-center justify-center rounded-xl p-2 ring-1 sm:h-28 sm:w-28 ${
                    c.lightBg
                      ? "bg-white/95 ring-white/20"
                      : "bg-gradient-to-br from-white/[0.06] to-white/[0.02] ring-white/5"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={c.src}
                      alt={c.full}
                      fill
                      sizes="120px"
                      className="object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold tracking-wider text-white">
                    {c.name}
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-muted">
                    {c.full}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
