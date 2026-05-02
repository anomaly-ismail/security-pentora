"use client";

import Image from "next/image";
import { Phone, MapPin, Building2, Mail } from "lucide-react";

const COMPANY_NAME =
  "PENTORA SECURITY SİBER GÜVENLİK FİNANSAL TEKNOLOJİLER TİCARET VE SANAYİ LTD. ŞTİ.";
const ADDRESS =
  "Türkiye / Eskişehir, Şirintepe Mahallesi, Metiner Sokak";
const PHONE = "+90 541 805 46 75";
const EMAIL = "info@pentorasec.com.tr";

const CERTS = [
  { src: "/oscp.png", alt: "OSCP", lightBg: false },
  { src: "/osep.png", alt: "OSEP", lightBg: false },
  { src: "/oswe.png", alt: "OSWE", lightBg: false },
  { src: "/GXPN.png", alt: "GXPN", lightBg: false },
  { src: "/ceh.png", alt: "CEH", lightBg: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#04060a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src="/logo-pentora.png"
                  alt="Pentora Security"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-[0.18em] text-white">
                  PENTORA
                </div>
                <div className="text-[11px] font-medium tracking-[0.32em] text-primary/80">
                  SECURITY
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Kurumsal siber güvenlik ve pentest danışmanlığı. Saldırı yüzeyinizi
              haritalandırır, gerçek dünya senaryolarıyla test eder ve
              kanıtlanabilir çözümler sunarız.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {CERTS.map((c) => (
                <div
                  key={c.alt}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-lg p-1.5 ring-1 opacity-85 transition hover:opacity-100 ${
                    c.lightBg
                      ? "bg-white/95 ring-white/20"
                      : "bg-white/[0.04] ring-white/5"
                  }`}
                  title={c.alt}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-semibold tracking-[0.32em] text-muted">
              KEŞFET
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["#hizmetler", "Hizmetler"],
                ["#metodoloji", "Metodoloji"],
                ["#sertifikalar", "Sertifikalar"],
                ["#iletisim", "İletişim"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold tracking-[0.32em] text-muted">
              İLETİŞİM
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-white/85 leading-relaxed">
                  {COMPANY_NAME}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted">{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-white transition hover:text-primary"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white transition hover:text-primary"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Pentora Security. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-2 font-mono tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            sec.pentorasec.com.tr
          </div>
        </div>
      </div>
    </footer>
  );
}
