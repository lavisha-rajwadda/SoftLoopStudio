import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog-posts";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="group block">
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          width={1200}
          height={680}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-rose-light text-primary px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default BlogCard;
