"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Terminal, Activity } from "lucide-react";

const STATS = [
  { value: "150+", label: "Tamamlanan Pentest" },
  { value: "40+", label: "Kurumsal Müşteri" },
  { value: "7/24", label: "Olay Müdahale" },
  { value: "%99", label: "Müşteri Memnuniyeti" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="container-custom relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium tracking-wider text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              SİBER GÜVENLİK & PENTEST DANIŞMANLIĞI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]"
            >
              Saldırganlardan{" "}
              <span className="text-gradient">bir adım önde</span> olun.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              <span className="font-semibold text-white">Pentora Security</span>;
              ofansif güvenlik uzmanlığı, gerçek dünya saldırı simülasyonları ve
              uçtan uca danışmanlık ile kurumunuzun dijital varlıklarını korur.
              Sektör standardı sertifikalı kadromuzla risklerinizi tespit eder,
              kanıtlanabilir çözümler sunarız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#hizmetler"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-background shadow-glow transition hover:shadow-glow-lg"
              >
                Pentest Paketleri
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary/40 hover:bg-white/10"
              >
                Ücretsiz Ön Görüşme
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <TerminalCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="glow-border relative rounded-2xl bg-surface/80 p-1 shadow-glow-lg backdrop-blur">
      <div className="rounded-[14px] bg-[#070a12] font-mono text-[13px] leading-relaxed">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-[11px] tracking-wider text-muted">
            <Terminal className="h-3.5 w-3.5" /> pentora@target ~ #
          </div>
          <Activity className="h-3.5 w-3.5 text-primary" />
        </div>
        <div className="space-y-1.5 px-5 py-5">
          <Line prompt="$" cmd="nmap -sV -A target.corp" />
          <p className="text-muted">Discovered open ports 22, 80, 443, 8443</p>
          <Line prompt="$" cmd="recon-ng modules attack" />
          <p className="text-success">[+] 12 attack vectors enumerated</p>
          <Line prompt="$" cmd="exploit --module web/auth-bypass" />
          <p className="text-accent">[!] CVE-2024-XXXX confirmed</p>
          <Line prompt="$" cmd="report --format pdf --client corp" />
          <p className="text-success">[OK] Pentora rapor hazır ✔</p>
          <div className="flex items-center gap-2 pt-2 text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-[12px]">
              Bulgular kanıtlandı • Çözüm önerisi hazır
            </span>
          </div>
          <div className="flex items-center gap-1 pt-1">
            <span className="text-primary">$</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ prompt, cmd }: { prompt: string; cmd: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-primary">{prompt}</span>
      <span className="text-white/90">{cmd}</span>
    </div>
  );
}
