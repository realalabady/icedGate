import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const isRTL = i18n.language === "ar";

  const posts = t("blog.posts", { returnObjects: true }) as BlogPost[];

  // Single post view
  if (id) {
    const post = posts.find((p) => p.id === id);

    if (!post) {
      return (
        <Layout>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              Post not found
            </h1>
            <Button asChild className="mt-4">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <article className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <Button variant="ghost" asChild className="mb-6 group">
                  <Link to="/blog">
                    <ArrowLeft
                      className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${
                        isRTL
                          ? "ml-2 rotate-180 group-hover:translate-x-1"
                          : "mr-2"
                      }`}
                    />
                    {isRTL ? "العودة للمدونة" : "Back to Blog"}
                  </Link>
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString(
                      isRTL ? "ar-SA" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                  {post.title}
                </h1>

                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-8" />

                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </article>
      </Layout>
    );
  }

  // Blog list view
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("blog.title")} subtitle={t("blog.subtitle")} />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Card className="group overflow-hidden bg-card hover:shadow-lg transition-all h-full border-border hover:border-primary/50">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString(
                          isRTL ? "ar-SA" : "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.summary}
                    </p>

                    <Button
                      variant="link"
                      asChild
                      className="p-0 h-auto group/btn"
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-1"
                      >
                        {t("blog.readMore")}
                        <ArrowRight
                          className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${
                            isRTL ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
