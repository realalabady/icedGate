import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: t("contact.info.phoneValue"),
      href: "tel:0558612626",
    },
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: t("contact.info.emailValue"),
      href: "mailto:info@icegate-hvac.com",
    },
    {
      icon: MapPin,
      label: t("contact.info.address"),
      value: t("contact.info.addressValue"),
    },
    {
      icon: Clock,
      label: t("contact.info.hours"),
      value: t("contact.info.hoursValue"),
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Success!",
      description: t("contact.form.success"),
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="border-none shadow-xl h-full">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.form.name")} *</Label>
                      <Input
                        id="name"
                        required
                        placeholder={t("contact.form.name")}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("contact.form.email")} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="055 XXX XXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        {t("contact.form.subject")} *
                      </Label>
                      <Input
                        id="subject"
                        required
                        placeholder={t("contact.form.subject")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("contact.form.message")} *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t("contact.form.message")}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t("contact.form.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.label}
                          </h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              dir={
                                item.href.startsWith("tel") ? "ltr" : undefined
                              }
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Map Placeholder */}
                <Card className="overflow-hidden border-border">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Al Danah Ash Shamaliyah, Dhahran 34258
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Plus Code: 84VW+P3
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
