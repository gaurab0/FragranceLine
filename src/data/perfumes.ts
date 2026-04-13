import BlueDeChanel from '../assets/Bleu De Chanel.jpg';
import Coco from '../assets/CocoMaidmossele.jpg';
import Creed from '../assets/Creed.jpg';
import Missdior from '../assets/MissDior.jpg';
import DiorSuavage from '../assets/Dior Suavage.jpg';
import LaMale from '../assets/LaMale.jpg';
import Erosflame from '../assets/ErosFlame.jpg';
import Million from '../assets/OneMillion.jpg';
import AcquaDiGio from '../assets/Acqua Di Gio.jpg';
import DolceGabana from '../assets/D&Glightblue.jpg';
import TomFord from '../assets/TomFordOmbre.jpg';
import LibreEdt from '../assets/LibreEdt.jpg';
import BrightCrystal from '../assets/Versace Bright Crystal.jpg';
import BlackOpium from '../assets/BlackOpium.jpg';
import Elixir from '../assets/LeMaleElixir.jpg';
import Chanelno5 from '../assets/ChanelNo5.jpg';
import poison from '../assets/Poison.jpg';
import Goodgirl from '../assets/Good Girl.jpg';
import Dylanblue from '../assets/Dylan Blue.jpg';
import VsBombshell from '../assets/VSbombshell.jpg';
import Gucci from '../assets/Gucciflora.jpg';
export interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: 'men' | 'women' | 'unisex';
  image: string;
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Bleu De Chanel",
    brand: "Chanel",
    price: 120,
    description: "A fresh and spicy fragrance with a blend of citrus and woody notes.",
    category: "men",
    image: BlueDeChanel,
  },
  {
    id: 2,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    price: 110,
    description: "An elegant fragrance with rose and jasmine, perfect for sophisticated women.",
    category: "women",
    image: Coco,
  },
  {
    id: 3,
    name: "Creed Aventus",
    brand: "Creed",
    price: 380,
    description: "A legendary fragrance with pineapple and ambroxan for a bold masculine presence.",
    category: "men",
    image: Creed,
  },
  {
    id: 4,
    name: "Miss Dior",
    brand: "Dior",
    price: 100,
    description: "A sensual and floral fragrance with notes of jasmine and rose.",
    category: "women",
    image: Missdior,
  },
  {
    id: 5,
    name: "Sauvage",
    brand: "Dior",
    price: 105,
    description: "A fresh aromatic spray with ambroxan and spice for the modern man.",
    category: "unisex",
    image: DiorSuavage,
  },
  {
    id: 6,
    name: "La Male",
    brand: "Jean Paul Gaultier",
    price: 65,
    description: "riental fougere that mixes lavender, mint, and vanilla, designed to evoke a preppy yet sexy sailor aesthetic. ",
    category: "men",
    image: LaMale,
  },
  {
    id: 7,
    name: "1 Million",
    brand: "Paco Rabanne",
    price: 85,
    description: "A spicy amber fragrance with notes of leather and tonka bean.",
    category: "men",
    image: Million,
  },
  {
    id: 8,
    name: "Eros Flame",
    brand: "Versace",
    price: 90,
    description: "A fresh aquatic fragrance with coconut and vanilla notes.",
    category: "men",
    image: Erosflame,
  },
  {
    id: 9,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: 75,
    description: "A fresh marine fragrance for men with citrus and light musk.",
    category: "men",
    image: AcquaDiGio,
  },
  {
    id: 10,
    name: "Ombre Leather",
    brand: "Tom Ford",
    price: 95,
    description: "A sophisticated fragrance with notes of apricot and blackcurrant.",
    category: "unisex",
    image: TomFord,
  },
  {
    id: 11,
    name: "Libre EDT",
    brand: "YSL",
    price: 88,
    description: "A passionate fragrance with mint and vanilla for bold men.",
    category: "men",
    image: LibreEdt,
  },
  {
    id: 12,
    name: "Bright Crystal",
    brand: "Versace",
    price: 92,
    description: "A fresh and luminous fragrance with yuzu and pomegranate.",
    category: "women",
    image: BrightCrystal,
  },
  {
    id: 13,
    name: "Black Opium",
    brand: "YSL",
    price: 98,
    description: "An intoxicating fragrance with coffee and vanilla notes.",
    category: "women",
    image: BlackOpium,
  },
  {
    id: 14,
    name: "La Male Elixir",
    brand: "Jean Paul Gaultier",
    price: 82,
    description: "A sophisticated fragrance with nuits de cardamom and pepper.",
    category: "men",
    image: Elixir,
  },
  {
    id: 15,
    name: "Chanel N05",
    brand: "Chanel",
    price: 110,
    description: "A floral explosion with notes of sambac jasmine and rose.",
    category: "women",
    image: Chanelno5,
  },
  {
    id: 16,
    name: "Dylan Blue",
    brand: "Versace",
    price: 92,
    description: "A warm spicy fragrance with notes of cinnamon and saffron.",
    category: "unisex",
    image: Dylanblue,
  },
  {
    id: 17,
    name: "Poison",
    brand: " Dior",
    price: 105,
    description: "A mysterious fragrance with almond and vanilla notes.",
    category: "women",
    image: poison,
  },
  {
    id: 18,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 88,
    description: "A classic fresh fragrance with citrus and lavender.",
    category: "women",
    image: Goodgirl,
  },
  {
    id: 19,
    name: "BombShell",
    brand: "Versace",
    price: 98,
    description: "A romantic fragrance with notes of tuberose and freesia.",
    category: "women",
    image: VsBombshell,
  },
  {
    id: 20,
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    price: 78,
    description: "A fresh fruity fragrance with Granny Smith apple notes.",
    category: "unisex",
    image: DolceGabana,
  },
  {
    id: 21,
    name: "Gucci Flora",
    brand: "Gucci",
    price: 82,
    description: "A spicy iris fragrance for the sophisticated man.",
    category: "women",
    image: Gucci,
  },

];
