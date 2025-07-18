import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <section className="section bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">Loading blog posts...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Insights and thoughts on technology and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div key={post._id} className="blog-card">
              <div className="p-6">
                {post.imageUrl && (
                  <div className="mb-4">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="certification-badge">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Recent"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button className="btn-primary">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
