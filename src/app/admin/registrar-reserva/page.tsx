"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Reserva } from "@/lib/supabase";

const servicioOptions = [
  { value: "glamping", label: "Glamping" },
  { value: "camping", label: "Camping Plan Pareja" },
];

const planOptions: Record<string, { value: string; label: string; precio: number }[]> = {
  glamping: [
    { value: "plan-pareja-lun-jue", label: "Plan Pareja — Lun a Jue", precio: 320000 },
    { value: "plan-pareja-vie-dom", label: "Plan Pareja — Vie y Dom", precio: 360000 },
    { value: "plan-pareja-sab-fest", label: "Plan Pareja — Sáb y Festivos", precio: 460000 },
    { value: "plan-celebracion-lun-jue", label: "Plan Celebración — Lun a Jue", precio: 400000 },
    { value: "plan-celebracion-vie-dom", label: "Plan Celebración — Vie y Dom", precio: 440000 },
    { value: "plan-celebracion-sab-fest", label: "Plan Celebración — Sáb y Festivos", precio: 540000 },
  ],
  camping: [
    { value: "plan-pareja-semana", label: "Plan Pareja — Entre semana", precio: 150000 },
    { value: "plan-pareja-fds", label: "Plan Pareja — Fin de semana", precio: 170000 },
  ],
};

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);

export default function RegistrarReservaPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<Reserva & { servicio: "glamping" | "camping" }>({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "glamping",
    plan: "",
    precio: 0,
    fecha_checkin: "",
    fecha_checkout: "",
    notas: "",
  });

  const handleServicioChange = (servicio: "glamping" | "camping") => {
    setForm((f) => ({ ...f, servicio, plan: "", precio: 0 }));
  };

  const handlePlanChange = (planValue: string) => {
    const planes = planOptions[form.servicio] || [];
    const selected = planes.find((p) => p.value === planValue);
    setForm((f) => ({ ...f, plan: planValue, precio: selected?.precio ?? 0 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: dbError } = await supabase.from("reservas").insert([
        {
          nombre: form.nombre,
          telefono: form.telefono,
          email: form.email,
          servicio: form.servicio,
          plan: form.plan,
          precio: form.precio,
          fecha_checkin: form.fecha_checkin,
          fecha_checkout: form.fecha_checkout,
          notas: form.notas || null,
        },
      ]);

      if (dbError) throw dbError;

      // Meta Pixel — Purchase event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Purchase", {
          currency: "COP",
          value: form.precio,
          content_name: form.plan,
          content_category: form.servicio,
        });
      }

      router.push("/gracias");
    } catch (err: any) {
      setError("Error al guardar la reserva. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentPlanes = planOptions[form.servicio] || [];

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: "#080e0b" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Image src="/logo.png" alt="Mirador del Diamante" width={70} height={70} className="object-contain mx-auto mb-4" />
          <p className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Uso interno</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-cream-100 mb-2">
            Registrar Reserva
          </h1>
          <p className="text-cream-400 text-sm">
            Llena este formulario después de cerrar la venta por WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-dark p-6 md:p-8 space-y-6">

          {/* DATOS DEL CLIENTE */}
          <div>
            <h2 className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Datos del cliente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                  placeholder="Juan García"
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 placeholder-cream-600/50 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                  placeholder="+57 300 000 0000"
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 placeholder-cream-600/50 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Correo electrónico *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="cliente@email.com"
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 placeholder-cream-600/50 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-forest-600/30" />

          {/* DETALLES DE LA RESERVA */}
          <div>
            <h2 className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Detalles de la reserva
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Servicio *</label>
                <select
                  required
                  value={form.servicio}
                  onChange={(e) => handleServicioChange(e.target.value as "glamping" | "camping")}
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                >
                  {servicioOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ backgroundColor: "#0d1a12" }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Plan *</label>
                <select
                  required
                  value={form.plan}
                  onChange={(e) => handlePlanChange(e.target.value)}
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                >
                  <option value="" style={{ backgroundColor: "#0d1a12" }}>Selecciona un plan</option>
                  {currentPlanes.map((p) => (
                    <option key={p.value} value={p.value} style={{ backgroundColor: "#0d1a12" }}>
                      {p.label} — {formatCOP(p.precio)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Fecha Check-in *</label>
                <input
                  type="date"
                  required
                  value={form.fecha_checkin}
                  onChange={(e) => setForm((f) => ({ ...f, fecha_checkin: e.target.value }))}
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-cream-400 text-xs font-medium mb-1.5">Fecha Check-out *</label>
                <input
                  type="date"
                  required
                  value={form.fecha_checkout}
                  onChange={(e) => setForm((f) => ({ ...f, fecha_checkout: e.target.value }))}
                  className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* PRECIO CALCULADO */}
          {form.precio > 0 && (
            <div className="rounded border border-gold-500/30 p-4" style={{ backgroundColor: "rgba(201,168,76,0.05)" }}>
              <p className="text-cream-400 text-xs mb-1">Valor de la reserva</p>
              <p className="font-heading text-3xl font-bold text-gold-500">{formatCOP(form.precio)}</p>
            </div>
          )}

          <div className="border-t border-forest-600/30" />

          {/* NOTAS */}
          <div>
            <label className="block text-cream-400 text-xs font-medium mb-1.5">Notas adicionales</label>
            <textarea
              value={form.notas}
              onChange={(e) => setForm((f) => ({ ...f, notas: e.target.value }))}
              placeholder="Decoración, personas adicionales, requerimientos especiales..."
              rows={3}
              className="w-full bg-forest-800 border border-forest-600/50 text-cream-100 placeholder-cream-600/50 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold-500/60 transition-colors resize-none"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-900/20 border border-red-800/30 rounded px-4 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Guardando reserva..." : "Registrar Reserva"}
          </button>

          <p className="text-cream-600 text-xs text-center">
            Al registrar, se disparará el evento de conversión en Meta Ads automáticamente.
          </p>
        </form>
      </div>
    </div>
  );
}
