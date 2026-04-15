import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
            Soft Loop <span className="text-primary">Studio</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Handmade crochet gifts & accessories made with love. Each piece is uniquely crafted to bring warmth and joy.
          </p>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-3 text-foreground">Stay Connected</h4>
          <p className="text-muted-foreground text-sm mb-3">Follow us for crochet inspiration and new arrivals!</p>
          <div className="flex gap-3">
            <span className="bg-muted rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-rose-light transition-colors cursor-pointer text-sm">Instagram</span>
            <span className="bg-muted rounded-full p-2 text-muted-foreground hover:text-primary hover:bg-rose-light transition-colors cursor-pointer text-sm">Pinterest</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Soft Loop Studio © 2026
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
