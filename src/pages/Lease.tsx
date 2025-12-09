import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

const Lease = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const benefits = t("lease.benefits.items", {
    returnObjects: true,
  }) as string[];
  const propertyTypes = t("lease.form.propertyTypes", {
    returnObjects: true,
  }) as string[];
  const systemTypes = t("lease.form.systemTypes", {
    returnObjects: true,
  }) as string[];
  const budgets = t("lease.form.budgets", { returnObjects: true }) as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Success!",
      description: t("lease.form.success"),
    });
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-20 bg-background min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t("lease.form.success")}
                </h2>
                <Button onClick={() => setIsSuccess(false)}>
                  Submit Another Application
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("lease.title")}
            subtitle={t("lease.subtitle")}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                {t("lease.benefits.title")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-card border-primary/20">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {benefit}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                    {t("lease.form.title")}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        {t("lease.form.fullName")} *
                      </Label>
                      <Input
                        id="fullName"
                        required
                        placeholder={t("lease.form.fullName")}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("lease.form.phone")} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="055 XXX XXXX"
                          dir="ltr"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("lease.form.email")} *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                      <Label htmlFor="address">
                        {t("lease.form.address")} *
                      </Label>
                      <Input
                        id="address"
                        required
                        placeholder={t("lease.form.address")}
                      />
                    </div>

                    {/* Property Type & System Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>{t("lease.form.propertyType")} *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("lease.form.propertyType")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {propertyTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("lease.form.systemType")} *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t("lease.form.systemType")}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {systemTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label>{t("lease.form.budget")} *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t("lease.form.budget")} />
                        </SelectTrigger>
                        <SelectContent>
                          {budgets.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes">{t("lease.form.notes")}</Label>
                      <Textarea
                        id="notes"
                        rows={4}
                        placeholder={t("lease.form.notes")}
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label>{t("lease.form.documents")}</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        t("lease.form.submit")
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lease;
