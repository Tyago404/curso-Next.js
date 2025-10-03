import {
  format,
  formatDistanceToNow as dateFnsFormateDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsFormateDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

const rawDate = "2025-10-03T05:44:06.384Z";
