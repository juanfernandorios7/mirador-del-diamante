import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Link from "next/link";
import { WHATSAPP_GENERAL_URL, INSTAGRAM_URL } from "@/lib/constants";

const activities = [
  { icon: "🍽️", label: "Restaurante con vista panorámica" },
  { icon: "🏞️", label: "Lagos recreativos" },
  { icon: "🐴", label: "Cabalgatas" },
  { icon: "🏍️", label: "Paseo en cuatrimoto" },
  { icon: "🔥", label: "Fogata con amigos" },
  { icon: "🌅", label: "Campamento al atardecer" },
  { icon: "🌙", label: "Ver caer la noche" },
  { icon: "🌿", label: "Senderos ecológicos" },
];

const heroFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-gold-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Glamping de lujo",
    text: "Cama Queen, jacuzzi privado, minibar surtido y dos desayunos incluidos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-gold-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Camping Plan Pareja",
    text: "Fogata, hamaca, cobijas y gastronomía incluida en plena naturaleza.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-gold-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Zona natural completa",
    text: "Lagos recreativos, senderos ecológicos, cabalgatas y restaurante con vista.",
  },
];

export default function Home() {
  return (
    <>
      {/* HEADER WRAPPER — top bar + pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-40">
        {/* TOP CONTACT BAR */}
        <div className="hidden md:flex items-center justify-between px-8 py-2 bg-forest-950/95 backdrop-blur-sm border-b border-forest-700/30 text-xs text-cream-600">
          <div className="flex items-center gap-6">
            <a href="tel:+573005878262" className="flex items-center gap-1.5 hover:text-cream-300 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
              +57 300 587 8262
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cream-300 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @miradordeldiamante
            </a>
          </div>
        </div>

        {/* PILL NAVBAR */}
        <div className="px-4 md:px-8 py-2">
          <div className="max-w-6xl mx-auto bg-white rounded-full px-5 py-2.5 shadow-2xl flex items-center justify-between">
            <Link href="/">
              <Image src="/logo.png" alt="Mirador del Diamante" width={52} height={52} className="object-contain" />
            </Link>
            <div className="hidden md:flex items-center gap-7">
              <Link href="#experiencias" className="text-forest-600 hover:text-gold-600 transition-colors text-sm font-medium tracking-wide">
                Experiencias
              </Link>
              <Link href="#zonas" className="text-forest-600 hover:text-gold-600 transition-colors text-sm font-medium tracking-wide">
                El Lugar
              </Link>
              <Link href="#actividades" className="text-forest-600 hover:text-gold-600 transition-colors text-sm font-medium tracking-wide">
                Actividades
              </Link>
            </div>
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-400 text-forest-900 text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen">
        {/* Background fallback */}
        <div className="absolute inset-0 bg-forest-900" style={{ zIndex: 0 }} />
        {/* Hero image — img nativo para que backdrop-filter funcione en cards hermanas */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Vista panorámica de Mirador del Diamante, Girardota"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          style={{ zIndex: 1 }}
          fetchPriority="high"
          decoding="async"
        />
        {/* Left-to-right dark vignette */}
        <div className="absolute inset-0" style={{ zIndex: 2, background: "linear-gradient(to right, rgba(8,14,11,0.55) 0%, rgba(8,14,11,0.22) 45%, rgba(8,14,11,0.02) 100%)" }} />
        {/* Bottom dark gradient for cards readability */}
        <div className="absolute inset-0" style={{ zIndex: 2, background: "linear-gradient(to top, rgba(8,14,11,0.6) 0%, rgba(8,14,11,0.15) 15%, transparent 35%)" }} />

        {/* Left-aligned hero content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-16 pt-64 pb-32 md:pt-36 md:pb-60">
          <div className="max-w-2xl">
            <p className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-5">
              Girardota, Antioquia
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream-100 leading-[1.1] mb-6">
              La ciudad, vista<br />
              desde arriba,<br />
              <span className="text-gold-500">hace menos ruido</span>
            </h1>
            <p className="text-white/90 text-lg max-w-lg mb-10 leading-relaxed">
              Glamping de lujo y camping bajo las estrellas, rodeado de montañas, lagos y bosques en Girardota, Antioquia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/glamping"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-900 font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5"
              >
                Ver Glamping
              </Link>
              <Link
                href="/camping-plan-pareja"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Ver Camping
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS — desktop only */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block px-8 md:px-16 pb-8">
          <p className="text-cream-500 text-xs tracking-[0.25em] uppercase mb-4">
            En Mirador del Diamante:
          </p>
          <div className="flex gap-3">
            {heroFeatures.map((feat, i) => (
              <div
                key={i}
                className="flex-1 p-5"
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "0.5px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "12px",
                }}
              >
                <div className="mb-3 [&_svg]:text-[#D4A042] [&_svg]:stroke-[#D4A042]">{feat.icon}</div>
                <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>{feat.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{feat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE EL LUGAR */}
      <section className="section-padding max-w-5xl mx-auto text-center">
        <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">El Mirador</p>
        <div className="gold-divider mb-6" />
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mb-6">
          Bienvenidos a Mirador del Diamante
        </h2>
        <p className="text-cream-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Un refugio donde la tranquilidad del paisaje se encuentra con la comodidad que mereces.
          Disfruta de vistas panorámicas, senderos ecológicos, lagos recreativos y un entorno
          perfecto para desconectarte de la rutina.
        </p>
      </section>

      {/* GALERÍA ZONAS COMUNES */}
      <section id="zonas" className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">El Lugar</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mb-4">
            Explora nuestras zonas comunes
          </h2>
          <p className="text-cream-400 text-lg max-w-2xl mx-auto">
            Cada rincón fue diseñado para que vivas algo realmente inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { label: "Vista panorámica", span: "col-span-2 md:col-span-2", height: "min-h-[300px] md:min-h-[420px]", img: "/zona-1.jpg" },
            { label: "Lagos recreativos", span: "", height: "min-h-[180px]", img: "/zona-2.jpg" },
            { label: "Senderos ecológicos", span: "", height: "min-h-[180px]", img: "/zona-3.jpg" },
            { label: "Restaurante con vista", span: "", height: "min-h-[180px]", img: "/zona-4.jpg" },
            { label: "Zonas verdes", span: "", height: "min-h-[180px]", img: "/zona-5.jpg" },
          ].map((item, i) => (
            <div key={i} className={`card-dark relative overflow-hidden ${item.span} ${item.height}`}>
              <div className="absolute inset-0 bg-forest-900" />
              <Image src={item.img} alt={item.label} fill className="object-cover opacity-70" sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"} loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10" style={{ background: "linear-gradient(to top, rgba(8,14,11,0.9), transparent)" }}>
                <span className="text-cream-200 text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section id="actividades" className="section-padding bg-forest-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Qué puedes hacer</p>
            <div className="gold-divider mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100">
              Vive la experiencia completa
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activities.map((act, i) => (
              <div key={i} className="card-dark p-5 text-center hover:border-gold-500/40 transition-colors">
                <span className="text-3xl block mb-3">{act.icon}</span>
                <p className="text-cream-200 text-sm font-medium leading-snug">{act.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRAS EXPERIENCIAS */}
      <section id="experiencias" className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Elige tu experiencia</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mb-4">
            Nuestras experiencias
          </h2>
          <p className="text-cream-400 text-lg max-w-xl mx-auto">
            Dos formas únicas de vivir la naturaleza. Elige la que va contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GLAMPING */}
          <div className="card-dark group hover:border-gold-500/50 transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-forest-700 flex items-center justify-center">
              <Image src="/glamping-cover.jpg" alt="Glamping de lujo Mirador del Diamante" fill className="object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gold-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  PREMIUM
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="font-heading text-3xl font-bold text-cream-100 mb-2">Glamping</h3>
              <p className="text-cream-400 text-sm leading-relaxed mb-4">
                Cama Queen, jacuzzi privado, minibar surtido, dos desayunos, TV y bafle.
                El equilibrio perfecto entre aventura y lujo.
              </p>
              <div className="mt-auto">
                <p className="text-cream-600 text-xs mb-1">Desde</p>
                <p className="price-tag mb-5">
                  $320.000 <span className="text-cream-400 text-base font-normal">COP / noche</span>
                </p>
                <Link href="/glamping" className="btn-gold w-full text-center block">
                  Ver Glamping →
                </Link>
              </div>
            </div>
          </div>

          {/* CAMPING */}
          <div className="card-dark group hover:border-gold-500/50 transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden bg-forest-600 flex items-center justify-center">
              <Image src="/camping-cover.jpg" alt="Camping Plan Pareja Mirador del Diamante" fill className="object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wide text-cream-100 bg-forest-400">
                  PLAN PAREJA
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="font-heading text-3xl font-bold text-cream-100 mb-2">Camping</h3>
              <p className="text-cream-400 text-sm leading-relaxed mb-4">
                Carpa equipada, colchoneta, cobijas, almohadas, caseta con hamaca y
                2 hamburguesas con bebidas. La esencia pura del aire libre.
              </p>
              <div className="mt-auto">
                <p className="text-cream-600 text-xs mb-1">Fines de semana</p>
                <p className="price-tag mb-5">
                  $170.000 <span className="text-cream-400 text-base font-normal">COP / noche</span>
                </p>
                <Link href="/camping-plan-pareja" className="btn-outline w-full text-center block">
                  Ver Camping →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="section-padding bg-forest-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream-100 mb-6">
            ¿Dónde estamos?
          </h2>
          <p className="text-cream-400 text-lg mb-4">
            📍 Girardota, Antioquia — a solo minutos del área metropolitana de Medellín
          </p>
          <p className="text-cream-600 text-base mb-8">
            El escape perfecto para un fin de semana sin tener que viajar lejos.
          </p>
          <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
            Preguntar por la ubicación →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-forest-600/30 py-12 px-6 bg-forest-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left">
              <Image src="/logo.png" alt="Mirador del Diamante" width={80} height={80} className="object-contain mx-auto md:mx-0 mb-4" />
              <p className="text-cream-600 text-sm">Girardota, Antioquia</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-cream-200 font-semibold mb-3 text-sm tracking-wide uppercase">Contacto</h4>
              <a href="https://wa.me/573005878262" target="_blank" rel="noopener noreferrer" className="text-cream-400 hover:text-gold-500 transition-colors text-sm block">
                +57 300 587 8262
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-cream-400 hover:text-gold-500 transition-colors text-sm block mt-1">
                @miradordeldiamante
              </a>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-cream-200 font-semibold mb-3 text-sm tracking-wide uppercase">Experiencias</h4>
              <Link href="/glamping" className="text-cream-400 hover:text-gold-500 transition-colors text-sm block">Glamping</Link>
              <Link href="/camping-plan-pareja" className="text-cream-400 hover:text-gold-500 transition-colors text-sm block mt-1">Camping Plan Pareja</Link>
            </div>
          </div>
          <div className="border-t border-forest-600/30 mt-8 pt-6 text-center">
            <p className="text-cream-600 text-xs">
              © {new Date().getFullYear()} Mirador del Diamante. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="floating-cta btn-whatsapp" aria-label="Contactar por WhatsApp">
        <WhatsAppIcon size={22} />
        <span className="hidden sm:inline font-semibold">Reservar por WhatsApp</span>
      </a>
    </>
  );
}
