"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function GraciasPage() {
  useEffect(() => {
    // Meta Pixel — Purchase event (fired cuando el asesor registra una reserva)
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        currency: "COP",
        value: 0, // El valor real se pasa desde la página de registro
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: "#080e0b" }}>
      <Image src="/logo.png" alt="Mirador del Diamante" width={90} height={90} className="object-contain mb-8 opacity-90" />

      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#1e4030" }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="gold-divider mb-8" />
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-100 mb-4">
        ¡Reserva registrada!
      </h1>
      <p className="text-cream-400 text-lg max-w-md mb-8 leading-relaxed">
        La reserva ha sido guardada exitosamente. El equipo de Mirador del Diamante
        tiene toda la información para brindar la mejor experiencia.
      </p>

      <div className="card-dark p-6 max-w-sm mb-8">
        <p className="text-cream-200 text-sm font-medium">¿Qué sigue?</p>
        <p className="text-cream-400 text-sm mt-2 leading-relaxed">
          Confirma el pago con el cliente por WhatsApp y envíale la información
          de ingreso al lugar.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/admin/registrar-reserva" className="btn-gold px-6 py-3 text-sm">
          Registrar otra reserva
        </Link>
        <Link href="/" className="btn-outline px-6 py-3 text-sm">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
