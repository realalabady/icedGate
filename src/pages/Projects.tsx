import { useTranslation } from "react-i18next";
import { Building2, Home, Factory, Heart, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true }) as Array<{
    title: string;
    type: string;
    description: string;
  }>;

  const getIcon = (type: string) => {
    if (type.includes("Commercial") || type.includes("تجاري")) return Building2;
    if (type.includes("Residential") || type.includes("سكني")) return Home;
    if (type.includes("Industrial") || type.includes("صناعي")) return Factory;
    if (type.includes("Healthcare") || type.includes("رعاية")) return Heart;
    return Thermometer;
  };

  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-500/20 to-cyan-500/10",
      "from-teal-500/20 to-emerald-500/10",
      "from-indigo-500/20 to-purple-500/10",
      "from-sky-500/20 to-blue-500/10",
      "from-cyan-500/20 to-teal-500/10",
      "from-violet-500/20 to-indigo-500/10",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = getIcon(project.type);

              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 h-full cursor-pointer border-border hover:border-primary/50">
                    <div
                      className={`aspect-video bg-gradient-to-br ${getGradient(
                        index
                      )} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-primary/30 group-hover:scale-110 group-hover:text-primary/50 transition-all duration-300" />
                      </div>
                      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                        <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                          {project.type}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Residential Projects" },
              { value: "80+", label: "Commercial Projects" },
              { value: "30+", label: "Industrial Projects" },
              { value: "20+", label: "Healthcare Projects" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
