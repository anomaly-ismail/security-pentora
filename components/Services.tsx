"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  ShieldCheck,
  Crown,
  ArrowRight,
} from "lucide-react";

type Pkg = {
  name: string;
  tagline: string;
  price: string;
  duration: string;
  highlight?: boolean;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
};

const PACKAGES: Pkg[] = [
  {
    name: "Starter Pentest",
    tagline: "Küçük & orta ölçekli işletmeler için temel sızma testi.",
    price: "Talep Üzerine",
    duration: "5 - 7 iş günü",
    icon: Zap,
    features: [
      "Tek web uygulaması veya tek domain",
      "OWASP Top 10 odaklı test",
      "Otomatik + manuel zafiyet taraması",
      "Yönetici özetli teknik rapor",
      "1 ay içinde ücretsiz re-test",
    ],
    cta: "Teklif Al",
  },
  {
    name: "Professional Pentest",
    tagline: "Çok katmanlı uygulama ve API ortamları için kapsamlı test.",
    price: "Talep Üzerine",
    duration: "10 - 14 iş günü",
    icon: ShieldCheck,
    highlight: true,
    badge: "EN POPÜLER",
    features: [
      "Web + API + iç ağ entegrasyon testi",
      "Yetki yükseltme ve iş mantığı testleri",
      "Manuel exploit & PoC kanıtları",
      "Detaylı CVSS skorlu raporlama",
      "Geliştirici remediation oturumu",
      "3 ay içinde 2 ücretsiz re-test",
    ],
    cta: "Hemen Başla",
  },
  {
    name: "Enterprise Red Team",
    tagline: "Kurumsal organizasyonlar için tam kapsamlı saldırı simülasyonu.",
    price: "Özel Fiyatlandırma",
    duration: "4 - 8 hafta",
    icon: Crown,
    features: [
      "Web, mobil, API, altyapı, AD, cloud",
      "Phishing & sosyal mühendislik senaryoları",
      "Red Team / Purple Team operasyonu",
      "MITRE ATT&CK eşlemeli raporlama",
      "Yönetim sunumu ve teknik atölye",
      "12 ay danışmanlık desteği",
    ],
    cta: "Görüşme Planla",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="HİZMET PAKETLERİMİZ"
          title={
            <>
              İhtiyacınıza göre{" "}
              <span className="text-gradient-static">ölçeklenebilir</span>{" "}
              pentest çözümleri
            </>
          }
          description="Standart bir checklist değil; her kuruma özel risk profiline ve saldırı yüzeyine göre tasarlanmış pentest paketleri sunuyoruz."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <PackageCard key={p.name} pkg={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-muted">
          Özel ihtiyaçlarınız için{" "}
          <a
            href="#iletisim"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            ekibimizle görüşün
          </a>
          .
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {
  const Icon = pkg.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative rounded-2xl p-px transition ${
        pkg.highlight
          ? "bg-gradient-to-b from-primary/60 via-accent/40 to-transparent shadow-glow-lg"
          : "bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30"
      }`}
    >
      <div className="relative flex h-full flex-col rounded-[15px] bg-surface/90 p-7 backdrop-blur">
        {pkg.badge && (
          <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-background shadow-glow">
            {pkg.badge}
          </span>
        )}

        <div
          className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            pkg.highlight
              ? "bg-primary/15 text-primary ring-1 ring-primary/30"
              : "bg-white/5 text-white ring-1 ring-white/10"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
        <p className="mt-1 text-sm text-muted">{pkg.tagline}</p>

        <div className="my-6 flex items-end gap-2 border-y border-white/5 py-5">
          <span className="text-3xl font-bold text-white">{pkg.price}</span>
        </div>

        <div className="mb-5 flex items-center gap-2 text-xs font-medium text-muted">
          <span className="h-1 w-1 rounded-full bg-primary" />
          Süre: {pkg.duration}
        </div>

        <ul className="space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/85">
              <Check
                className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                  pkg.highlight ? "text-primary" : "text-success"
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            pkg.highlight
              ? "bg-gradient-to-r from-primary to-accent text-background shadow-glow hover:shadow-glow-lg"
              : "border border-white/10 bg-white/5 text-white hover:border-primary/40 hover:bg-white/10"
          }`}
        >
          {pkg.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] font-semibold tracking-[0.32em] text-primary"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
