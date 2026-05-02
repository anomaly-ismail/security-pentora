"use client";

import { motion } from "framer-motion";
import {
  Check,
  Zap,
  ShieldCheck,
  Crown,
  ArrowRight,
  Minus,
  Sparkles,
} from "lucide-react";

type Pkg = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
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
    tagline:
      "Küçük işletmeler ve fabrikalar için temel dış ağ güvenlik denetimi.",
    price: "₺30.000",
    priceNote: "Ortalama bedel • KDV hariç",
    duration: "5 - 7 iş günü",
    icon: Zap,
    features: [
      "Dış ağ (External) zafiyet taraması",
      "OWASP Top 10 kritik zafiyet kontrolü",
      "Açık port ve servis analizi",
      "Otomatik + manuel doğrulama",
      "Yönetici özetli teknik rapor",
      "1 ay içinde ücretsiz re-test",
    ],
    cta: "Teklif Al",
  },
  {
    name: "Professional Pentest",
    tagline:
      "ERP/CRM kullanan orta ölçekli işletmeler ve fabrikalar için kapsamlı denetim.",
    price: "₺50.000",
    priceNote: "Ortalama bedel • KDV hariç",
    duration: "8 - 12 iş günü",
    icon: ShieldCheck,
    highlight: true,
    badge: "EN POPÜLER",
    features: [
      "Starter paketinin tüm içeriği",
      "Web uygulaması testi (ERP / CRM)",
      "1 adet oltalama (Phishing) simülasyonu",
      "Çalışan farkındalık raporu",
      "Detaylı CVSS skorlu raporlama",
      "3 ay içinde 2 ücretsiz re-test",
    ],
    cta: "Hemen Başla",
  },
  {
    name: "Enterprise Red Team",
    tagline:
      "Fabrikalar ve kurumsal yapılar için iç + dış tam kapsamlı sızma testi.",
    price: "₺100.000",
    priceNote: "Başlangıç bedeli • Kapsama göre değişir",
    duration: "3 - 5 hafta",
    icon: Crown,
    features: [
      "Professional paketinin tüm içeriği",
      "İç ağ (Internal) sızma testi",
      "Yetki yükseltme (Privilege Escalation)",
      "Detaylı çözüm yol haritası",
      "MITRE ATT&CK eşlemeli raporlama",
      "6 ay danışmanlık desteği",
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
          description="Fabrikalar ve orta-küçük ölçekli işletmelerin operasyonel ihtiyaçlarına göre tasarlanmış, kademeli olarak büyüyen üç pentest paketi."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <PackageCard key={p.name} pkg={p} index={i} />
          ))}
        </div>

        <ComparisonMatrix />

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/5 bg-surface/40 p-5 text-center text-xs leading-relaxed text-muted backdrop-blur sm:text-sm">
          <span className="font-semibold text-white/90">Bilgi:</span>{" "}
          Belirtilen ücretler ortalama referans bedellerdir; hedef sayısı,
          uygulama karmaşıklığı, çalışma süresi ve kapsam genişliğine göre
          özelleştirilir. Fabrika ve KOBİ ölçeğindeki kurumlar için özel
          fiyatlandırma seçenekleri sunulmaktadır. Net teklif için{" "}
          <a
            href="#iletisim"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            ekibimizle iletişime geçin
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

        <div className="my-6 border-y border-white/5 py-5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-bold tracking-tight text-white">
              {pkg.price}
            </span>
            <span className="text-sm font-medium text-muted">'den</span>
          </div>
          <div className="mt-1.5 text-[11px] font-medium tracking-wide text-muted">
            {pkg.priceNote}
          </div>
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

type Cell = boolean | string;

type Row = {
  label: string;
  values: [Cell, Cell, Cell];
};

const MATRIX: Row[] = [
  { label: "Web uygulaması (ERP / CRM) testi", values: [false, true, true] },
  { label: "Oltalama (Phishing) simülasyonu", values: [false, true, true] },
  { label: "İç ağ (Internal) sızma testi", values: [false, false, true] },
  { label: "Yetki yükseltme (Privilege Esc.)", values: [false, false, true] },
  { label: "MITRE ATT&CK eşlemeli rapor", values: [false, false, true] },
  { label: "Ücretsiz re-test", values: ["1 ay", "3 ay × 2", "6 ay × 2"] },
  { label: "Danışmanlık desteği", values: ["—", "—", "6 ay"] },
];

const COLUMNS = ["Starter", "Professional", "Enterprise"] as const;

function ComparisonMatrix() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-14 max-w-4xl"
    >
      <div className="mb-5 flex items-center justify-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <h3 className="text-[10px] font-semibold tracking-[0.32em] text-muted">
          PAKETLERİN FARKI
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/8 bg-surface/50 backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/8">
                <th className="px-5 py-3.5 text-[10px] font-semibold tracking-[0.2em] text-muted">
                  ÖZELLİK
                </th>
                {COLUMNS.map((col, i) => {
                  const isHighlight = i === 1;
                  return (
                    <th
                      key={col}
                      className={`px-3 py-3.5 text-center text-xs font-bold tracking-wide ${
                        isHighlight
                          ? "bg-primary/[0.04] text-primary"
                          : "text-white"
                      }`}
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-t border-white/[0.04] ${
                    idx % 2 === 1 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <td className="px-5 py-2.5 text-[13px] font-medium text-white/85">
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <CellView key={i} value={v} highlight={i === 1} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

function CellView({ value, highlight }: { value: Cell; highlight: boolean }) {
  const wrapper = `px-3 py-2.5 text-center ${
    highlight ? "bg-primary/[0.04]" : ""
  }`;

  if (typeof value === "string") {
    return (
      <td className={wrapper}>
        <span
          className={`text-[11px] font-semibold ${
            value === "—" ? "text-muted/50" : "text-white/90"
          }`}
        >
          {value}
        </span>
      </td>
    );
  }

  return (
    <td className={wrapper}>
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
          value
            ? highlight
              ? "bg-primary/15 text-primary ring-1 ring-primary/30"
              : "bg-success/10 text-success ring-1 ring-success/20"
            : "bg-transparent text-muted/40"
        }`}
        aria-label={value ? "Dahil" : "Dahil değil"}
      >
        {value ? (
          <Check className="h-3 w-3" strokeWidth={3} />
        ) : (
          <Minus className="h-3 w-3" strokeWidth={2.5} />
        )}
      </span>
    </td>
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
