export interface PickYDestination {
    planetImage: string;
    planetName: string;
    planetInfo: string;
    avgDistance: string;
    travelTime: string;
    changePlanet: (name: string) => void
}

export type PlanetNames = "Moon" | "Mars" | "Titan" | "Europe"
