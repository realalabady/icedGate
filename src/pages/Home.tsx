import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Clock,
  Shield,
  Award,
  Wrench,
  Thermometer,
  Wind,
  Settings,
  Cog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const whyUsItems = [
    {
      icon: Clock,
      title: t("home.whyUs.experience"),
      desc: t("home.whyUs.experienceDesc"),
    },
    {
      icon: Award,
      title: t("home.whyUs.certified"),
      desc: t("home.whyUs.certifiedDesc"),
    },
    {
      icon: Shield,
      title: t("home.whyUs.support"),
      desc: t("home.whyUs.supportDesc"),
    },
    {
      icon: Star,
      title: t("home.whyUs.warranty"),
      desc: t("home.whyUs.warrantyDesc"),
    },
  ];

  const services = [
    { icon: Wrench, key: "installation" },
    { icon: Settings, key: "repair" },
    { icon: Cog, key: "maintenance" },
    { icon: Wind, key: "ducting" },
    { icon: Thermometer, key: "central" },
  ];

  const projects = t("projects.items", { returnObjects: true }) as Array<{
    title: string;
    type: string;
    description: string;
  }>;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/65 via-secondary/50 to-secondary/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-yellow-400/50 fill-yellow-400/50"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-secondary-foreground/80 text-sm">
                  4.3 ({t("common.rating")} - 21 {t("common.reviews")})
                </span>
              </div>

              <p className="text-primary font-semibold mb-2 text-lg">
                {t("hero.subtitle")}
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="group">
                  <Link to="/contact">
                    {t("hero.cta")}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isRTL
                          ? "mr-2 rotate-180 group-hover:-translate-x-1"
                          : "ml-2"
                      }`}
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  <Link to="/services">{t("hero.ctaSecondary")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: "-10%",
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t("home.intro.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("home.intro.description")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("home.whyUs.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-background group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("home.featuredServices")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <AnimatedSection key={service.key} delay={index * 0.1}>
                <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </p>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 h-auto group/btn"
                    >
                      <Link to="/services" className="flex items-center gap-1">
                        {t("home.viewAll")}
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

          <AnimatedSection className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/services">
                {t("home.viewAll")}
                <ArrowRight
                  className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle title={t("home.featuredProjects")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="group overflow-hidden bg-background hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Thermometer className="w-16 h-16 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                {t("home.viewAll")}
                <ArrowRight
                  className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? "هل تحتاج خدمات التكييف؟" : "Need HVAC Services?"}
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {isRTL
                ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر لاحتياجات التكييف الخاصة بك."
                : "Contact us today for a free consultation and quote for your air conditioning needs."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">{t("hero.cta")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:0558612626" dir="ltr">
                  055 861 2626
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
