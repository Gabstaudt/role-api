/**
 * Tipagens compartilhadas (ou não, podemos criar tipagens separadas) entre serviços e rotas.
 */

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface GreenRouteRequest {
  origin: Coordinates;
  destination: Coordinates;
}

export interface RouteSegment {
  id: string;
  greenScore: number;
  coordinates: number[][];
}
