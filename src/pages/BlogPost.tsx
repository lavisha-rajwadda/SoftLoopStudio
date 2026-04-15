import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/data/blog-posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:opacity-80">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Blog
      </Link>

      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium bg-rose-light text-primary px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
        {post.title}
      </h1>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <span>By {post.author}</span>
        <span>•</span>
        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
      </div>

      <img
        src={post.image}
        alt={post.title}
        width={1200}
        height={680}
        className="w-full rounded-xl mb-8 object-cover aspect-[16/9]"
      />

      <MarkdownRenderer content={post.content} />

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground mb-4">Enjoyed this post? Check out more on our blog!</p>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity text-sm">
          More Articles
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
