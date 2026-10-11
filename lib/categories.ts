export type CategoryMeta = {
  name: string;
  description: string;
};

export const CATEGORIES: CategoryMeta[] = [
  { name: "Geopolitica", description: "Equilibri e conflitti tra potenze" },
  { name: "Politica", description: "Istituzioni e dibattito pubblico" },
  { name: "Economia", description: "Mercati, lavoro e politiche economiche" },
  { name: "Società", description: "Movimenti, diritti e vita quotidiana" },
  { name: "Storia", description: "Il passato che spiega il presente" },
  { name: "Cultura", description: "Libri, arte e immaginario collettivo" },
];
