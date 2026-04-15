import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center mb-12">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">The Crochet Journal</h1>
      <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
        Tutorials, tips, and stories from our studio. Learn to crochet and get inspired!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  </div>
);

export default Blog;
