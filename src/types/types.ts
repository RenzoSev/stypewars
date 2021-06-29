export interface planets {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface planetWithResidents extends planets {
  residents: [string];
  films: [string];
  created: string;
  edited: string;
  url: string;
};

