import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Reserva = {
  id?: string;
  created_at?: string;
  nombre: string;
  telefono: string;
  email: string;
  servicio: "glamping" | "camping";
  plan: string;
  precio: number;
  fecha_checkin: string;
  fecha_checkout: string;
  notas?: string;
};
