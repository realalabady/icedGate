import { useTranslation } from "react-i18next";
import { Building2, Home, Factory, Wrench, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const About = () => {
  const { t } = useTranslation();

  const expertiseItems = [
    {
      icon: Home,
      title: t("about.expertise.residential"),
      desc: t("about.expertise.residentialDesc"),
    },
    {
      icon: Building2,
      title: t("about.expertise.commercial"),
      desc: t("about.expertise.commercialDesc"),
    },
    {
      icon: Factory,
      title: t("about.expertise.industrial"),
      desc: t("about.expertise.industrialDesc"),
    },
    {
      icon: Wrench,
      title: t("about.expertise.maintenance"),
      desc: t("about.expertise.maintenanceDesc"),
    },
  ];

  const certifications = t("about.certifications.items", {
    returnObjects: true,
  }) as string[];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("about.title")} />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {t("about.story.title")}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("about.expertise.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertiseItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-all group bg-background">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("about.certifications.title")} />

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Team Members" },
              { value: "1000+", label: "Happy Clients" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-foreground/70">
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

export default About;
