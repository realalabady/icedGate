import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Wrench,
  Settings,
  Cog,
  Wind,
  Thermometer,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    { icon: Wrench, key: "installation", color: "from-blue-500 to-blue-600" },
    { icon: Settings, key: "repair", color: "from-cyan-500 to-cyan-600" },
    { icon: Cog, key: "maintenance", color: "from-teal-500 to-teal-600" },
    { icon: Wind, key: "ducting", color: "from-sky-500 to-sky-600" },
    {
      icon: Thermometer,
      key: "central",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const features = t(`services.${service.key}.features`, {
                returnObjects: true,
              }) as string[];
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection key={service.key} delay={index * 0.1}>
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-2 ${
                          isEven ? "" : "lg:flex-row-reverse"
                        }`}
                      >
                        {/* Image/Icon Side */}
                        <div
                          className={`aspect-video lg:aspect-auto bg-gradient-to-br ${
                            service.color
                          } relative flex items-center justify-center min-h-[250px] ${
                            !isEven ? "lg:order-2" : ""
                          }`}
                        >
                          <service.icon className="w-24 h-24 text-primary-foreground/50" />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div
                          className={`p-8 lg:p-10 bg-card flex flex-col justify-center ${
                            !isEven ? "lg:order-1" : ""
                          }`}
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>

                          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            {t(`services.${service.key}.title`)}
                          </h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {t(`services.${service.key}.description`)}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-sm text-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Button asChild className="w-fit group">
                            <Link to="/contact">
                              {t("services.cta")}
                              <ArrowRight
                                className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                                  isRTL
                                    ? "mr-2 rotate-180 group-hover:-translate-x-1"
                                    : "ml-2"
                                }`}
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? "جاهزون لخدمتك" : "Ready to Serve You"}
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {isRTL
                ? "احصل على استشارة مجانية وعرض سعر لاحتياجات التكييف الخاصة بك."
                : "Get a free consultation and quote for your HVAC needs."}
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

export default Services;
