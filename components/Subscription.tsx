"use client";

import { motion } from "framer-motion";
import { Check, Activity, Radio, Cpu, ArrowRight, Repeat } from "lucide-react";
import { SectionHeader } from "./Services";

type Plan = {
  name: string;
  tagline: string;
  priceMin: string;
  priceMax?: string;
  priceSuffix: string;
  priceNote: string;
  highlight?: boolean;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "KOBİ",
    tagline:
      "Küçük & orta ölçekli işletmeler için aylık dış ağ ve temel web izlemesi.",
    priceMin: "₺5.000",
    priceMax: "7.500",
    priceSuffix: "/ay",
    priceNote: "KDV hariç • Aylık abonelik",
    icon: Activity,
    features: [
      "NMAP taraması",
      "NIKTO web taraması",
      "SSL sertifikası & domain kontrolü",
      "Açık port taraması",
      "Basic Web Vuln. (XSS, SQLi vb.) kontrolleri",
      "Aylık karşılaştırmalı raporlama",
    ],
    cta: "Aboneliği Başlat",
  },
  {
    name: "Orta Ölçekli Firma",
    tagline:
      "Web ve API ortamı bulunan büyüyen işletmeler için sürekli denetim.",
    priceMin: "₺10.000",
    priceMax: "15.000",
    priceSuffix: "/ay",
    priceNote: "KDV hariç • Aylık abonelik",
    icon: Radio,
    highlight: true,
    badge: "EN POPÜLER",
    features: [
      "KOBİ paketinin tüm içeriği",
      "Web Vuln. (XSS, SQLi, Auth Bypass vb.) kontrolleri",
      "API uç noktalarında CWE-200 benzeri sızıntı tespitleri",
      "Yeni çıkan CVE açıklarının taranması",
      "Aylık karşılaştırmalı raporlama",
    ],
    cta: "Hemen Başla",
  },
  {
    name: "Enterprise",
    tagline:
      "Kritik altyapılar için sürekli izleme + öncelikli müdahale ve danışmanlık.",
    priceMin: "₺25.000",
    priceSuffix: "+ /ay",
    priceNote: "KDV hariç • Kapsama göre özelleştirilir",
    icon: Cpu,
    features: [
      "Orta Ölçekli paketin tüm içeriği",
      "Geniş CWE testleri (CWE-200, 522, 284, 863, 639, 201, 89, 79, 78, 22)",
      "Web sitesi yoksa iç ağ sızma testi dahildir",
      "Yeni kod ve iç uygulama güvenlik denetimi",
      "Kritik alarmda öncelikli danışmanlık & müdahale",
      "Detaylı rapor + online sunum, CVSS skorlu önceliklendirme",
    ],
    cta: "Görüşme Planla",
  },
];

export default function Subscription() {
  return (
    <section id="abonelik" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="AYLIK ABONELİK"
          title={
            <>
              Sürekli izleme ile{" "}
              <span className="text-gradient-static">7/24 koruma</span>
            </>
          }
          description="Tek seferlik bir testten fazlasını ister misiniz? Aylık taranan, karşılaştırmalı raporlanan ve değişen tehditlere göre güncellenen saldırı yüzeyi izleme paketleri."
        />

        <div className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[11px] font-medium tracking-wider text-accent">
            <Repeat className="h-3.5 w-3.5" />
            HER AY YENİDEN TARAMA & RAPOR
          </span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = plan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group relative rounded-2xl p-px transition ${
        plan.highlight
          ? "bg-gradient-to-b from-accent/60 via-primary/40 to-transparent shadow-glow-purple"
          : "bg-gradient-to-b from-white/10 to-transparent hover:from-accent/30"
      }`}
    >
      <div className="relative flex h-full flex-col rounded-[15px] bg-surface/90 p-7 backdrop-blur">
        {plan.badge && (
          <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-accent to-primary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-background shadow-glow-purple">
            {plan.badge}
          </span>
        )}

        <div
          className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            plan.highlight
              ? "bg-accent/15 text-accent ring-1 ring-accent/30"
              : "bg-white/5 text-white ring-1 ring-white/10"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

        <div className="my-6 border-y border-white/5 py-5">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-white">
              {plan.priceMin}
            </span>
            {plan.priceMax && (
              <span className="text-2xl font-semibold text-muted">
                –{plan.priceMax}
              </span>
            )}
            <span className="ml-1 text-sm font-medium text-muted">
              {plan.priceSuffix}
            </span>
          </div>
          <div className="mt-1.5 text-[11px] font-medium tracking-wide text-muted">
            {plan.priceNote}
          </div>
        </div>

        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/85">
              <Check
                className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                  plan.highlight ? "text-accent" : "text-success"
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            plan.highlight
              ? "bg-gradient-to-r from-accent to-primary text-background shadow-glow-purple hover:shadow-glow-lg"
              : "border border-white/10 bg-white/5 text-white hover:border-accent/40 hover:bg-white/10"
          }`}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
