import Image from "next/image";
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

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3 bg-forest-900/90 backdrop-blur-sm border-b border-forest-600/30">
        <Link href="/">
          <Image src="/logo.png" alt="Mirador del Diamante" width={70} height={70} className="object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#experiencias" className="text-cream-200 hover:text-gold-500 transition-colors text-sm font-medium tracking-wide">
            Experiencias
          </Link>
          <Link href="#zonas" className="text-cream-200 hover:text-gold-500 transition-colors text-sm font-medium tracking-wide">
            El Lugar
          </Link>
          <Link href="#actividades" className="text-cream-200 hover:text-gold-500 transition-colors text-sm font-medium tracking-wide">
            Actividades
          </Link>
          <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-5 py-2.5">
            Reservar ahora
          </a>
        </div>
        <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-4 py-2 md:hidden">
          Reservar
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700" />
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080e0b 0%, rgba(8,14,11,0.4) 50%, transparent 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-gold-500 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Girardota, Antioquia
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream-100 leading-tight mb-6">
            Escápate a la<br />
            <span className="text-gold-500">naturaleza</span>
          </h1>
          <p className="text-cream-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Glamping de lujo y camping romántico en un refugio rodeado de montañas,
            lagos y bosques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/glamping" className="btn-gold text-base px-8 py-4">
              Ver Glamping
            </Link>
            <Link href="/camping-plan-pareja" className="btn-outline text-base px-8 py-4">
              Ver Camping
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-600 text-xs tracking-widest">
          <span>SCROLL</span>
          <div className="w-px h-8 bg-gold-500/50 animate-pulse" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-forest-700 to-forest-900" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(8,14,11,0.9), transparent)" }}>
                <span className="text-cream-200 text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section id="actividades" className="section-padding" style={{ backgroundColor: "#0d1a12" }}>
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
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                style={{ backgroundImage: "url('/glamping-cover.jpg')" }}
              />
              <div className="absolute top-4 left-4">
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
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                style={{ backgroundImage: "url('/camping-cover.jpg')" }}
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full tracking-wide text-cream-100" style={{ backgroundColor: "#2d5a3f" }}>
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
      <section className="section-padding" style={{ backgroundColor: "#0d1a12" }}>
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
      <footer className="border-t border-forest-600/30 py-12 px-6" style={{ backgroundColor: "#060c09" }}>
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline font-semibold">Reservar por WhatsApp</span>
      </a>
    </>
  );
}
