import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{product.category}</span>
        <h3 className="font-serif font-semibold text-lg mt-1 text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-foreground">${product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
