import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-serif text-xl font-bold text-foreground">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm">Browse our handmade collection!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 bg-card rounded-lg p-3 border border-border">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-medium text-sm text-foreground">{item.product.name}</h3>
                    <p className="text-primary font-bold text-sm mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Minus className="h-3 w-3 text-foreground" />
                      </button>
                      <span className="text-sm font-medium text-foreground w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Plus className="h-3 w-3 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto p-1 hover:bg-destructive/10 rounded transition-colors"
                      >
                        <Trash2 className="h-3 w-3 text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 space-y-3">
              <div className="flex justify-between text-foreground">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-muted-foreground text-sm hover:text-foreground transition-colors py-1"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
