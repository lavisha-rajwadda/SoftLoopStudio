import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-2xl font-bold text-foreground tracking-tight">
          Soft Loop <span className="text-primary">Studio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 ${
                isActive(link.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
