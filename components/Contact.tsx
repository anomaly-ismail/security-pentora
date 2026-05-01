"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, ShieldCheck } from "lucide-react";

const PHONE = "+90 541 805 46 75";

export default function Contact() {
  return (
    <section id="iletisim" className="relative py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface2 to-surface p-10 shadow-glow-lg md:p-16"
        >
          {/* decorative */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade opacity-30" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium tracking-wider text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                ÜCRETSİZ ÖN GÖRÜŞME
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Saldırı yüzeyinizi{" "}
                <span className="text-gradient-static">birlikte</span>{" "}
                haritalandıralım.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Pentora Security ekibiyle iletişime geçin; ihtiyacınıza en uygun
                pentest paketini ve yol haritasını ücretsiz görüşmemizde birlikte
                belirleyelim.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-background shadow-glow transition hover:shadow-glow-lg"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <InfoCard
                icon={<Phone className="h-4 w-4" />}
                title="Telefon"
                value={PHONE}
                href={`tel:${PHONE.replace(/\s/g, "")}`}
              />
              <InfoCard
                icon={<MapPin className="h-4 w-4" />}
                title="Adres"
                value="Şirintepe Mahallesi, Metiner Sokak, Eskişehir / Türkiye"
              />
              <InfoCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Çalışma Modeli"
                value="NDA & sözleşme ile gizlilik garantisi, uzaktan / yerinde danışmanlık."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass group flex items-start gap-4 rounded-xl p-5 transition hover:border-primary/30">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
        {icon}
      </div>
      <div>
        <div className="text-[11px] font-semibold tracking-[0.24em] text-muted">
          {title.toUpperCase()}
        </div>
        <div className="mt-1 text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
  if (href) return <a href={href}>{inner}</a>;
  return inner;
}
