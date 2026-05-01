"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeySquare,
  Bug,
  Lock,
  Network,
  ServerCog,
} from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Web App Pentest" },
  { icon: KeySquare, label: "API Pentest" },
  { icon: Bug, label: "Kırmızı Takım" },
  { icon: Network, label: "Altyapı Pentest" },
  { icon: ServerCog, label: "Cloud Security" },
  { icon: Lock, label: "ISO 27001 Uyumluluk" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-surface/30 backdrop-blur">
      <div className="container-custom py-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-[11px] font-semibold tracking-[0.32em] text-muted"
        >
          UZMANLIK ALANLARIMIZ
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-muted/90"
            >
              <Icon className="h-4 w-4 text-primary/80" />
              <span className="font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
