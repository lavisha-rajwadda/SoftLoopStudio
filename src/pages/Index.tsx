import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog-posts";
import heroImage from "@/assets/hero-crochet.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Handmade crochet collection" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Handmade with Love</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Soft, Cozy <br />
              <span className="text-primary">Crochet</span> Creations
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Unique handmade gifts and accessories crafted with care. Each piece tells a story of warmth, creativity, and love.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Collection <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-full font-semibold hover:bg-muted transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Toys", "Decor", "Accessories", "Home"].map((cat) => (
            <div
              key={cat}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
            >
              <p className="font-serif font-semibold text-foreground">{cat}</p>
              <p className="text-muted-foreground text-xs mt-1">Shop {cat.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="container mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Collection</h2>
          <p className="text-muted-foreground mt-2">Every piece is one-of-a-kind, made just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">From the Blog</h2>
              <p className="text-muted-foreground mt-1">Tips, tutorials & crochet inspiration</p>
            </div>
            <Link to="/blog" className="text-primary font-medium text-sm hover:opacity-80 flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-rose-light rounded-2xl p-10 md:p-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Looking for a Custom Piece?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            We love creating custom orders! Whether it's a special gift or a unique home accessory, let's make something beautiful together.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
