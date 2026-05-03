"use client";

import { motion } from "framer-motion";
import {
  Award,
  CreditCard,
  FileLock2,
  ShieldCheck,
  Building2,
  Mail,
  GraduationCap,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./Services";

type ServiceItem = {
  title: string;
  type: string;
  price: string;
};

type Group = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceItem[];
};

const GROUPS: Group[] = [
  {
    name: "ISO 27001",
    description: "Bilgi güvenliği yönetim sistemi",
    icon: ShieldCheck,
    items: [
      {
        title: "Sertifikasyon öncesi danışmanlık",
        type: "Başlangıç",
        price: "₺16.000",
      },
      {
        title: "Sertifikasyon için pentest hizmeti",
        type: "Tek hizmet",
        price: "₺17.000",
      },
    ],
  },
  {
    name: "PCI DSS Level 4",
    description: "Ödeme kartı endüstrisi veri güvenliği",
    icon: CreditCard,
    items: [
      {
        title: "Sertifikasyon öncesi danışmanlık",
        type: "Başlangıç",
        price: "₺16.000",
      },
    ],
  },
  {
    name: "ISO 27701",
    description: "Kişisel veri yönetim sistemi",
    icon: FileLock2,
    items: [
      {
        title: "Sertifikasyon öncesi danışmanlık",
        type: "Başlangıç",
        price: "₺16.000",
      },
      {
        title: "Sertifikasyon için pentest hizmeti",
        type: "Tek hizmet",
        price: "₺17.000",
      },
    ],
  },
  {
    name: "ISO 22301",
    description: "İş sürekliliği yönetim sistemi",
    icon: Building2,
    items: [
      {
        title: "Sertifikasyon öncesi danışmanlık",
        type: "Başlangıç",
        price: "₺16.000",
      },
      {
        title: "Sertifikasyon için pentest hizmeti",
        type: "Tek hizmet",
        price: "₺17.000",
      },
    ],
  },
  {
    name: "ISO 28000",
    description: "Tedarik zinciri güvenlik yönetimi",
    icon: Award,
    items: [
      {
        title: "Sertifikasyon öncesi danışmanlık",
        type: "Başlangıç",
        price: "₺16.000",
      },
      {
        title: "Sertifikasyon için pentest hizmeti",
        type: "Tek hizmet",
        price: "₺30.000",
      },
    ],
  },
];

type Extra = {
  name: string;
  description: string;
  options: { label: string; value: string }[];
  icon: React.ComponentType<{ className?: string }>;
};

const EXTRAS: Extra[] = [
  {
    name: "E-Posta Güvenliği",
    description:
      "Phishing filtreleme, SPF/DKIM/DMARC yapılandırması ve kurumsal mail güvenlik denetimi.",
    options: [
      { label: "Aylık abonelik", value: "₺6.000/ay" },
      { label: "Tek seferlik", value: "₺12.000" },
    ],
    icon: Mail,
  },
  {
    name: "Çalışan Farkındalık Eğitimi",
    description:
      "2 saatlik “Siber Güvenlik 101” eğitimi ve phishing simülasyonu sonrası zorunlu eğitim.",
    options: [{ label: "Kişi başı", value: "₺1.000" }],
    icon: GraduationCap,
  },
];

export default function Consulting() {
  return (
    <section id="danismanlik" className="relative py-24 md:py-32">
      <div className="container-custom">
        <SectionHeader
          eyebrow="DANIŞMANLIK & SERTİFİKASYON"
          title={
            <>
              Sertifikasyon süreçlerinde{" "}
              <span className="text-gradient-static">teknik danışmanlık</span>
            </>
          }
          description="Kurumunuzu ISO ve PCI DSS sertifikasyon süreçlerine teknik açıdan hazırlıyor; hem ön danışmanlık hem de gerekli pentest hizmetlerini sağlıyoruz."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {GROUPS.map((g, i) => (
            <GroupCard
              key={g.name}
              group={g}
              index={i}
              isLastOdd={
                i === GROUPS.length - 1 && GROUPS.length % 2 === 1
              }
            />
          ))}
        </div>

        {/* Ek Hizmetler */}
        <div className="mt-20">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-white/10" />
            <h3 className="text-[11px] font-semibold tracking-[0.32em] text-primary">
              EK HİZMETLER
            </h3>
            <span className="h-px w-8 bg-white/10" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {EXTRAS.map((extra, i) => (
              <ExtraCard key={extra.name} extra={extra} index={i} />
            ))}
          </div>
        </div>

        {/* KVKK & Sertifikasyon Uyarısı */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-yellow-500/15 bg-yellow-500/[0.03] p-6 backdrop-blur"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 ring-1 ring-yellow-500/20">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="flex-1 text-xs leading-relaxed text-muted sm:text-[13px]">
              <p className="mb-2 font-semibold text-white/90">
                Yasal & Hizmet Kapsamı Bilgilendirmesi
              </p>
              <p>
                Tüm hizmetler{" "}
                <span className="font-medium text-white/85">KVKK uyumlu</span>{" "}
                sunulmaktadır. Belirtilen fiyatların tamamı{" "}
                <span className="font-medium text-white/85">KDV hariç</span>tir.
                Pentora Security herhangi bir sertifikasyon işlemi yapmaz; yalnızca
                KOBİ &amp; Fabrika ölçeğindeki kurumları{" "}
                <span className="font-medium text-white/85">
                  sertifikasyon öncesi test eder
                </span>{" "}
                veya{" "}
                <span className="font-medium text-white/85">
                  danışmanlık sağlar
                </span>
                . Sertifika veren kurumun sertifikayı vermemesi veya kurumun
                sertifikayı alamaması durumunda Pentora Security Ltd. Şti. sorumlu
                değildir.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GroupCard({
  group,
  index,
  isLastOdd,
}: {
  group: Group;
  index: number;
  isLastOdd?: boolean;
}) {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`group relative rounded-2xl border border-white/8 bg-surface/60 p-6 backdrop-blur transition hover:border-primary/30 ${
        isLastOdd
          ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%_-_0.5rem)]"
          : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white">{group.name}</h4>
          <p className="mt-0.5 text-xs text-muted">{group.description}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {group.items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-white/90">
                {item.title}
              </div>
              <div className="mt-0.5 text-[11px] font-medium tracking-wide text-muted">
                {item.type}
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-base font-bold text-white">
                {item.price}
              </div>
              <div className="text-[10px] text-muted">+ KDV</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ExtraCard({ extra, index }: { extra: Extra; index: number }) {
  const Icon = extra.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-white/8 bg-surface/60 p-6 backdrop-blur transition hover:border-accent/30"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
        <Icon className="h-5 w-5" />
      </div>

      <h4 className="text-base font-bold text-white">{extra.name}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {extra.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {extra.options.map((opt) => (
          <div
            key={opt.label}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
          >
            <div className="text-[10px] font-semibold tracking-[0.18em] text-muted">
              {opt.label.toUpperCase()}
            </div>
            <div className="mt-0.5 text-sm font-bold text-white">
              {opt.value}
              <span className="text-[10px] font-medium text-muted">
                {" "}
                + KDV
              </span>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#iletisim"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-primary"
      >
        Teklif al
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}
