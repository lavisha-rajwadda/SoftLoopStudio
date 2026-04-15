import productBear from "@/assets/product-bear.jpg";
import productFlowers from "@/assets/product-flowers.jpg";
import productTote from "@/assets/product-tote.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productKeychains from "@/assets/product-keychains.jpg";
import productBlanket from "@/assets/product-blanket.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Amigurumi Teddy Bear",
    price: 28,
    image: productBear,
    description: "A huggable handmade crochet teddy bear in soft dusty pink yarn. Perfect as a gift or nursery decor.",
    category: "Toys",
  },
  {
    id: "2",
    name: "Crochet Flower Bouquet",
    price: 35,
    image: productFlowers,
    description: "A beautiful arrangement of handmade crochet roses and daisies in pastel colors. Flowers that last forever!",
    category: "Decor",
  },
  {
    id: "3",
    name: "Striped Tote Bag",
    price: 42,
    image: productTote,
    description: "A sturdy handmade crochet tote bag in cream and sage green stripes. Perfect for everyday use.",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Pastel Coaster Set",
    price: 18,
    image: productCoasters,
    description: "Set of 6 handmade crochet coasters in soft pastel colors. A cozy touch for your home.",
    category: "Home",
  },
  {
    id: "5",
    name: "Amigurumi Keychain Collection",
    price: 12,
    image: productKeychains,
    description: "Adorable mini crochet animal and flower keychains. Pick your favorite or collect them all!",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Baby Blanket",
    price: 55,
    image: productBlanket,
    description: "A soft, warm crochet baby blanket in pink and white. The perfect gift for a new arrival.",
    category: "Baby",
  },
];
