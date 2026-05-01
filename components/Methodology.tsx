"use client";

import { motion } from "framer-motion";
import {
  Search,
  ScanLine,
  Crosshair,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./Services";

const STEPS = [
  {
    icon: Search,
    title: "Keşif",
    desc: "Hedef sistem hakkında pasif ve aktif bilgi toplama, saldırı yüzeyinin haritalandırılması.",
  },
  {
    icon: ScanLine,
    title: "Tarama & Analiz",
    desc: "Manuel ve otomatik araçlarla servis, sürüm ve zafiyet tespiti; sahte pozitiflerin elenmesi.",
  },
  {
    icon: Crosshair,
    title: "Sömürü",
    desc: "Tespit edilen zafiyetlerin gerçek dünya senaryolarıyla doğrulanması ve PoC üretimi.",
  },
  {
    icon: FileSearch,
    title: "Raporlama",
    desc: "CVSS, OWASP ve MITRE ATT&CK eşlemeli; teknik ve yönetici özeti içeren detaylı rapor.",
  },
  {
    icon: ShieldCheck,
    title: "Re-Test & Destek",
    desc: "Geliştirici desteği, çözüm danışmanlığı ve kapatılan zafiyetlerin yeniden test edilmesi.",
  },
];

export default function Methodology() {
  return (
    <section id="metodoloji" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="METODOLOJİ"
          title={
            <>
              Disiplinli ve{" "}
              <span className="text-gradient-static">
                kanıta dayalı
              </span>{" "}
              5 aşamalı süreç
            </>
          }
          description="OWASP, PTES ve NIST 800-115 standartlarına uygun, tekrarlanabilir ve şeffaf bir pentest süreci yürütüyoruz."
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-10 lg:space-y-16">
            {STEPS.map((s, i) => (
              <Step key={s.title} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2"
    >
      <div
        className={`${
          left ? "lg:order-1 lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16"
        }`}
      >
        <div className="glass relative rounded-2xl p-7">
          <div
            className={`mb-4 inline-flex items-center gap-2 ${
              left ? "lg:flex-row-reverse" : ""
            }`}
          >
            <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-semibold tracking-wider text-primary ring-1 ring-primary/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
        </div>
      </div>

      <div
        className={`relative hidden lg:block ${
          left ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background shadow-glow">
            <div className="absolute inset-0 animate-pulse-slow rounded-full bg-primary/10" />
            <Icon className="relative h-7 w-7 text-primary" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
}
