"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { WHATSAPP_CAMPING_URL } from "@/lib/constants";
import { trackViewContent, trackLead } from "@/lib/pixel";

const includes = [
  { icon: "⛺", item: "1 Carpa completa" },
  { icon: "🛏️", item: "Colchoneta cómoda" },
  { icon: "🛌", item: "2 Cobijas y 2 almohadas" },
  { icon: "🍔", item: "2 Hamburguesas + bebidas" },
  { icon: "🪑", item: "Caseta con hamaca" },
  { icon: "🪵", item: "Piso en estibas" },
  { icon: "🌿", item: "Ingreso al Mirador" },
  { icon: "🏞️", item: "Zonas comunes y senderos" },
];

const faqs = [
  {
    q: "¿Cómo hago la reserva?",
    a: "Escríbenos por WhatsApp y uno de nuestros asesores confirmará la disponibilidad y te guiará en el proceso de pago.",
  },
  {
    q: "¿Qué pasa si quiero cancelar?",
    a: "No realizamos devoluciones de dinero, pero puedes reprogramar tu reserva con 5 días de anticipación.",
  },
  {
    q: "¿Necesito llevar algo?",
    a: "Nosotros ponemos todo el equipamiento. Solo llevas tu ropa, artículos personales y ganas de disfrutar.",
  },
  {
    q: "¿A qué hora es el ingreso y la salida?",
    a: "Ingreso desde la 1:00 p.m. Salida hasta las 2:00 p.m.",
  },
];

export default function CampingPlanPareja() {
  useEffect(() => {
    trackViewContent("Camping Plan Pareja", "camping", 170000);
  }, []);

  const handleWAClick = () => trackLead("Camping Plan Pareja", "camping");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-600" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/camping-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080e0b 0%, rgba(8,14,11,0.5) 50%, rgba(8,14,11,0.3) 100%)" }} />

        <div className="absolute top-6 left-6 z-10">
          <Link href="/" className="text-cream-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2">
            ← Volver al inicio
          </Link>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase mb-5 text-cream-100" style={{ backgroundColor: "#2d5a3f" }}>
            Plan Pareja
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream-100 leading-tight mb-5">
            Camping<br />
            <span className="text-gold-500">Plan Pareja</span>
          </h1>
          <p className="text-cream-400 text-lg md:text-xl mb-8 leading-relaxed">
            Vive la esencia pura del aire libre. Carpa equipada, fogata, hamburguesas
            y estrellas sobre tu cabeza en Girardota, Antioquia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href={WHATSAPP_CAMPING_URL} target="_blank" rel="noopener noreferrer" onClick={handleWAClick} className="btn-whatsapp w-full sm:w-auto px-8 py-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar ahora
            </a>
          </div>
          <p className="text-cream-600 text-sm">Ingreso 1:00 p.m. · Salida 2:00 p.m.</p>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="section-padding max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Tarifas</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-100">
            Precio por noche · Para dos personas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-dark p-7 text-center">
            <p className="text-cream-400 text-sm mb-3">Entre semana (Lun — Jue)</p>
            <p className="price-tag">$150.000</p>
            <p className="text-cream-600 text-xs mt-2">COP por noche</p>
          </div>
          <div className="card-dark p-7 text-center border-gold-500/60" style={{ boxShadow: "0 0 20px rgba(201,168,76,0.1)" }}>
            <span className="inline-block bg-gold-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
              FIN DE SEMANA
            </span>
            <p className="text-cream-400 text-sm mb-3">Viernes, Sábado y Festivos</p>
            <p className="price-tag">$170.000</p>
            <p className="text-cream-600 text-xs mt-2">COP por noche</p>
          </div>
        </div>
        <p className="text-cream-600 text-xs text-center mt-5">
          Decoración de carpa para fechas especiales: +$25.000 COP
        </p>
        <div className="text-center mt-8">
          <a href={WHATSAPP_CAMPING_URL} target="_blank" rel="noopener noreferrer" onClick={handleWAClick} className="btn-gold inline-flex">
            Verificar disponibilidad →
          </a>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="section-padding" style={{ backgroundColor: "#0d1a12" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Incluido</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-100">
              Todo lo que está incluido
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {includes.map((item) => (
              <div key={item.item} className="card-dark p-5 text-center hover:border-gold-500/30 transition-colors">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-cream-200 text-sm font-medium leading-snug">{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Galería</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-100">
            Así es tu camping
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg", "/c5.jpg", "/c6.jpg"].map((src, i) => (
            <div key={i} className={`card-dark relative overflow-hidden ${i === 0 ? "col-span-2 md:col-span-1 min-h-[250px]" : "min-h-[180px]"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-forest-700 to-forest-900" />
              <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('${src}')` }} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: "#0d1a12" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">FAQ</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-100">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-dark p-6">
                <h3 className="text-cream-100 font-semibold mb-2">{faq.q}</h3>
                <p className="text-cream-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding text-center" style={{ background: "linear-gradient(135deg, #0d1a12, #122019)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mb-4">
            ¿Listos para la aventura?
          </h2>
          <p className="text-cream-400 text-lg mb-8">
            Escríbenos y reserva tu noche de camping en Mirador del Diamante.
          </p>
          <a href={WHATSAPP_CAMPING_URL} target="_blank" rel="noopener noreferrer" onClick={handleWAClick} className="btn-whatsapp inline-flex text-lg px-10 py-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar Camping ahora
          </a>
          <p className="text-cream-600 text-xs mt-4">
            Girardota, Antioquia · +57 300 587 8262
          </p>
        </div>
      </section>

      <div className="py-6 text-center border-t border-forest-600/30" style={{ backgroundColor: "#060c09" }}>
        <Image src="/logo.png" alt="Mirador del Diamante" width={60} height={60} className="object-contain mx-auto opacity-70" />
      </div>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP_CAMPING_URL} target="_blank" rel="noopener noreferrer" onClick={handleWAClick} className="floating-cta btn-whatsapp" aria-label="Reservar por WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline font-semibold">Reservar por WhatsApp</span>
      </a>
    </>
  );
}
